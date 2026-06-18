package com.example.graph.validation;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@Component
public class GraphBusinessValidator {

    private static final Set<String> ASSET_TYPES = Set.of("Skill", "MCP", "工具", "规约", "数据资产", "测试集", "其他");
    private static final Set<String> STAGES = Set.of("理解", "规划", "执行", "验证", "常驻");

    public void validate(JsonNode graph) {
        Set<String> ids = new HashSet<>();
        validateLayers(graph);
        collectTopLevelNodeIds(graph, ids);
        collectModuleIds(graph, ids);
        validateEdges(graph, ids);
        validateStageParabolas(graph, ids);
        validateAssets(graph);
    }

    private void validateLayers(JsonNode graph) {
        JsonNode layers = graph.path("layers");
        if (!layers.isArray() || layers.size() != 5) {
            throw new GraphValidationException("layers 必须包含固定 5 层");
        }
        boolean hasModules = false;
        for (JsonNode layer : layers) {
            if ("layer.modules".equals(text(layer, "id"))) {
                hasModules = true;
            }
        }
        if (!hasModules) {
            throw new GraphValidationException("layers 必须包含 layer.modules");
        }
    }

    private void collectTopLevelNodeIds(JsonNode graph, Set<String> ids) {
        for (JsonNode node : graph.path("nodes")) {
            addId(ids, text(node, "id"));
        }
    }

    private void collectModuleIds(JsonNode graph, Set<String> ids) {
        JsonNode modules = graph.path("modules");
        if (!modules.isArray() || modules.size() != 4) {
            throw new GraphValidationException("modules 必须包含固定 4 个第四层子容器");
        }
        for (JsonNode module : modules) {
            String moduleId = text(module, "id");
            addId(ids, moduleId);
            for (JsonNode node : module.path("nodes")) {
                addId(ids, text(node, "id"));
            }
        }
    }

    private void validateEdges(JsonNode graph, Set<String> ids) {
        for (JsonNode edge : graph.path("edges")) {
            requireIdExists(ids, text(edge, "from"), "edges.from");
            requireIdExists(ids, text(edge, "to"), "edges.to");
        }
    }

    private void validateStageParabolas(JsonNode graph, Set<String> ids) {
        for (JsonNode flow : graph.path("stageParabolas")) {
            requireIdExists(ids, text(flow, "from"), "stageParabolas.from");
            requireIdExists(ids, text(flow, "through"), "stageParabolas.through");
            requireIdExists(ids, text(flow, "to"), "stageParabolas.to");
        }
    }

    private void validateAssets(JsonNode graph) {
        validateAssetArray(graph.path("overview").path("nodes"), "overview.nodes");
        validateAssetArray(graph.path("nodes"), "nodes");
        for (JsonNode module : graph.path("modules")) {
            validateAsset(module, "modules." + text(module, "id"));
            validateAssetArray(module.path("nodes"), "modules." + text(module, "id") + ".nodes");
        }
    }

    private void validateAssetArray(JsonNode array, String path) {
        if (!array.isArray()) {
            return;
        }
        for (JsonNode item : array) {
            validateAsset(item, path + "." + text(item, "id"));
        }
    }

    private void validateAsset(JsonNode item, String path) {
        JsonNode asset = item.path("asset");
        if (!asset.isObject()) {
            throw new GraphValidationException(path + " 必须配置 asset");
        }
        String type = text(asset, "type");
        if (!ASSET_TYPES.contains(type)) {
            throw new GraphValidationException(path + ".asset.type 非法: " + type);
        }
        validateStringArray(asset.path("dependencies"), path + ".asset.dependencies", null);
        validateStringArray(asset.path("stages"), path + ".asset.stages", STAGES);
        validateLinks(asset.path("links"), path + ".asset.links");
    }

    private void validateStringArray(JsonNode array, String path, Set<String> allowedValues) {
        if (!array.isArray()) {
            throw new GraphValidationException(path + " 必须是数组");
        }
        for (JsonNode item : array) {
            String value = item.asText("");
            if (value.trim().isEmpty()) {
                throw new GraphValidationException(path + " 不允许空字符串");
            }
            if (allowedValues != null && !allowedValues.contains(value)) {
                throw new GraphValidationException(path + " 枚举值非法: " + value);
            }
        }
    }

    private void validateLinks(JsonNode links, String path) {
        if (!links.isArray()) {
            throw new GraphValidationException(path + " 必须是数组");
        }
        for (JsonNode link : links) {
            if (text(link, "label").isEmpty() || text(link, "url").isEmpty()) {
                throw new GraphValidationException(path + " 中 label/url 不能为空");
            }
        }
    }

    private void addId(Set<String> ids, String id) {
        if (id.isEmpty()) {
            throw new GraphValidationException("id 不能为空");
        }
        if (!ids.add(id)) {
            throw new GraphValidationException("id 重复: " + id);
        }
    }

    private void requireIdExists(Set<String> ids, String id, String path) {
        if (!ids.contains(id)) {
            throw new GraphValidationException(path + " 引用了不存在的 id: " + id);
        }
    }

    private String text(JsonNode node, String field) {
        return node.path(field).asText("").trim();
    }
}
