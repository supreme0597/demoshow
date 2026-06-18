package com.example.graph.validation;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.networknt.schema.JsonSchema;
import com.networknt.schema.JsonSchemaFactory;
import com.networknt.schema.SpecVersion;
import com.networknt.schema.ValidationMessage;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.InputStream;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class GraphSchemaValidator {

    private final ObjectMapper objectMapper;
    private JsonSchema schema;

    public GraphSchemaValidator(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @PostConstruct
    public void init() throws Exception {
        JsonSchemaFactory factory = JsonSchemaFactory.getInstance(SpecVersion.VersionFlag.V7);
        try (InputStream inputStream = new ClassPathResource("schema/graph.schema.json").getInputStream()) {
            schema = factory.getSchema(objectMapper.readTree(inputStream));
        }
    }

    public void validate(JsonNode graphJson) {
        Set<ValidationMessage> errors = schema.validate(graphJson);
        if (!errors.isEmpty()) {
            String message = errors.stream()
                    .map(ValidationMessage::getMessage)
                    .limit(10)
                    .collect(Collectors.joining("; "));
            throw new GraphValidationException("JSON Schema 校验失败: " + message);
        }
    }
}
