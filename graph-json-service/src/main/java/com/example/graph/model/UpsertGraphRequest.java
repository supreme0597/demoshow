package com.example.graph.model;

import com.fasterxml.jackson.databind.JsonNode;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UpsertGraphRequest {

    @NotBlank
    @Size(max = 64)
    private String versionCode;

    @NotBlank
    @Size(max = 128)
    private String versionName;

    @NotNull
    private JsonNode graphJson;

    private String operator;

    public String getVersionCode() {
        return versionCode;
    }

    public void setVersionCode(String versionCode) {
        this.versionCode = versionCode;
    }

    public String getVersionName() {
        return versionName;
    }

    public void setVersionName(String versionName) {
        this.versionName = versionName;
    }

    public JsonNode getGraphJson() {
        return graphJson;
    }

    public void setGraphJson(JsonNode graphJson) {
        this.graphJson = graphJson;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }
}
