# Session JSON 可视化看板 — 高层架构设计

## 整体架构

```
session.json → Parser → Store → Renderer → DOM
                              ↕
                        User Interaction
                        (fold/expand)
```

纯浏览器端，单线程，无服务端。单文件 HTML 自包含所有逻辑和样式。

## 核心数据流

- 解析器扫描 messages，提取 `todowrite` 工具调用中的 todos 状态快照
- 追踪每个 TODO 的 in_progress/completed 变化时间区间
- assistant 消息的 parts 按区间归入对应 TODO 卡片
- parts 中的 reasoning 和 tool 调用折叠，text 保持展开

## 详细设计

见 `docs/superpowers/specs/2026-05-29-session-kanban-design.md`
