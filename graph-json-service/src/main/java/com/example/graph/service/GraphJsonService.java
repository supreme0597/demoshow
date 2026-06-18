package com.example.graph.service;

import com.example.graph.mapper.GraphJsonConfigMapper;
import com.example.graph.model.GraphJsonConfigDO;
import com.example.graph.model.GraphSourceVO;
import com.example.graph.model.UpsertGraphRequest;
import com.example.graph.validation.GraphBusinessValidator;
import com.example.graph.validation.GraphSchemaValidator;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.util.List;

@Service
public class GraphJsonService {

    private static final String CACHE_VERSIONS = "graph:versions";
    private static final String CACHE_GRAPH_PREFIX = "graph:json:";

    private final GraphJsonConfigMapper mapper;
    private final GraphSchemaValidator schemaValidator;
    private final GraphBusinessValidator businessValidator;
    private final ObjectMapper objectMapper;
    private final StringRedisTemplate redisTemplate;
    private final boolean cacheEnabled;
    private final long cacheTtlSeconds;

    public GraphJsonService(GraphJsonConfigMapper mapper,
                            GraphSchemaValidator schemaValidator,
                            GraphBusinessValidator businessValidator,
                            ObjectMapper objectMapper,
                            StringRedisTemplate redisTemplate,
                            @Value("${graph.cache.enabled:true}") boolean cacheEnabled,
                            @Value("${graph.cache.ttl-seconds:1800}") long cacheTtlSeconds) {
        this.mapper = mapper;
        this.schemaValidator = schemaValidator;
        this.businessValidator = businessValidator;
        this.objectMapper = objectMapper;
        this.redisTemplate = redisTemplate;
        this.cacheEnabled = cacheEnabled;
        this.cacheTtlSeconds = cacheTtlSeconds;
    }

    @Transactional(rollbackFor = Exception.class)
    public void upsert(UpsertGraphRequest request) throws Exception {
        JsonNode graphJson = request.getGraphJson();
        schemaValidator.validate(graphJson);
        businessValidator.validate(graphJson);

        String operator = normalizeOperator(request.getOperator());
        String graphJsonString = objectMapper.writeValueAsString(graphJson);

        mapper.selectActiveForUpdate(request.getVersionCode());
        mapper.fakeDeleteActiveByVersionCode(request.getVersionCode(), operator);

        GraphJsonConfigDO record = new GraphJsonConfigDO();
        record.setVersionCode(request.getVersionCode());
        record.setVersionName(request.getVersionName());
        record.setGraphJson(graphJsonString);
        record.setDelFlag(0);
        record.setCreatedBy(operator);
        record.setUpdatedBy(operator);
        mapper.insert(record);

        evictCache(request.getVersionCode());
    }

    public List<GraphSourceVO> listVersions() throws Exception {
        String cached = cacheGet(CACHE_VERSIONS);
        if (cached != null) {
            return objectMapper.readValue(
                    cached,
                    objectMapper.getTypeFactory().constructCollectionType(List.class, GraphSourceVO.class)
            );
        }

        List<GraphSourceVO> sources = mapper.selectActiveSources();
        cacheSet(CACHE_VERSIONS, objectMapper.writeValueAsString(sources));
        return sources;
    }

    public JsonNode getGraphJson(String versionCode) throws Exception {
        String cacheKey = CACHE_GRAPH_PREFIX + versionCode;
        String cached = cacheGet(cacheKey);
        if (cached != null) {
            return objectMapper.readTree(cached);
        }

        GraphJsonConfigDO record = mapper.selectActiveByVersionCode(versionCode);
        if (record == null) {
            throw new IllegalArgumentException("版本不存在或已删除: " + versionCode);
        }

        cacheSet(cacheKey, record.getGraphJson());
        return objectMapper.readTree(record.getGraphJson());
    }

    private void evictCache(String versionCode) {
        if (!cacheEnabled) {
            return;
        }
        try {
            redisTemplate.delete(CACHE_VERSIONS);
            redisTemplate.delete(CACHE_GRAPH_PREFIX + versionCode);
        } catch (RuntimeException ignored) {
            // Redis is an optimization; MySQL remains the source of truth.
        }
    }

    private String cacheGet(String key) {
        if (!cacheEnabled) {
            return null;
        }
        try {
            return redisTemplate.opsForValue().get(key);
        } catch (RuntimeException ignored) {
            return null;
        }
    }

    private void cacheSet(String key, String value) {
        if (!cacheEnabled) {
            return;
        }
        try {
            redisTemplate.opsForValue().set(key, value, ttl());
        } catch (RuntimeException ignored) {
            // Redis is an optimization; MySQL remains the source of truth.
        }
    }

    private Duration ttl() {
        return Duration.ofSeconds(cacheTtlSeconds);
    }

    private String normalizeOperator(String operator) {
        if (operator == null || operator.trim().isEmpty()) {
            return "system";
        }
        return operator.trim();
    }
}
