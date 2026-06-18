package com.example.graph.controller;

import com.example.graph.model.ApiResponse;
import com.example.graph.model.GraphSourceVO;
import com.example.graph.model.UpsertGraphRequest;
import com.example.graph.service.GraphJsonService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@Validated
@RestController
@RequestMapping("/api/graph-json")
public class GraphJsonController {

    private final GraphJsonService graphJsonService;

    public GraphJsonController(GraphJsonService graphJsonService) {
        this.graphJsonService = graphJsonService;
    }

    @PostMapping
    public ApiResponse<Map<String, String>> upsert(@Valid @RequestBody UpsertGraphRequest request) throws Exception {
        graphJsonService.upsert(request);
        return ApiResponse.ok(Map.of("versionCode", request.getVersionCode()));
    }

    @GetMapping("/versions")
    public ApiResponse<List<GraphSourceVO>> listVersions() throws Exception {
        return ApiResponse.ok(graphJsonService.listVersions());
    }

    @GetMapping("/{versionCode}")
    public JsonNode getGraphJson(@PathVariable String versionCode) throws Exception {
        return graphJsonService.getGraphJson(versionCode);
    }
}
