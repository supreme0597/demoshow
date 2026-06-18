window.GRAPH_DATA_SOURCES = [
  {
    id: "real",
    label: "RTOS NEXT",
    url: "graph-data.json",
    fallbackKey: "FALLBACK_GRAPH_DATA",
    inlineFallback: true
  },
  {
    id: "mock",
    label: "Mock 数据 Demo",
    url: "graph-data.mock.json",
    fallbackKey: "MOCK_GRAPH_DATA"
  }
];

// 接入后端版本列表接口时可启用：
// window.GRAPH_SOURCE_LIST_URL = "/api/graph-json/versions";
