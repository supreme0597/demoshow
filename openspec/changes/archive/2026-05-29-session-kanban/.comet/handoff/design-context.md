# Comet Design Handoff

- Change: session-kanban
- Phase: design
- Mode: compact
- Context hash: 705452a9e6f66b257ae10d82392dff3280c3d00925c57a8f58d68a598df32117

Generated-by: comet-handoff.sh

OpenSpec remains the canonical capability spec. This handoff is a deterministic, source-traceable context pack, not an agent-authored summary.

## openspec/changes/session-kanban/proposal.md

- Source: openspec/changes/session-kanban/proposal.md
- Lines: 1-33
- SHA256: 9998db11883429033dc5cf7ea6cc0d7bffc57c1e9eb31b12cb33a7a6b381dd5d

```md
# Session JSON 可视化看板 — 提案 (Proposal)

## 背景与动机

opencode 的会话记录（session.json）包含了完整的 AI 工作流信息：思考过程、工具调用、subagent 任务、文件变更等。但它的原始 JSON 格式不适合人工阅读和回顾。

需要一个可视化的看板工具，将 session.json 渲染为 Kanban Board，按 TODO 任务组织，让用户一目了然地回顾一次会话中完成了哪些工作。

## 目标

- 拖入 session.json 即可渲染为看板
- 按 TODO 任务分卡片，三列：待办 / 进行中 / 已完成
- 思考过程、工具调用折叠，仅显示名称
- AI 文本回复作为卡片主要内容
- 进度条展示整体和各卡片进度
- 纯前端，单 HTML 文件，零依赖

## 非目标

- 不编辑 session.json
- 不实现多人协作
- 不做持久化存储（可选 localStorage 缓存为非必须功能）
- 不做实时通信（预留扩展点但不实现）

## 范围

| 模块 | 涉及程度 |
|------|---------|
| JSON 解析 | 提取 info、messages、todowrite 中的 todos 数据 |
| UI 渲染 | 三层结构：Info Bar / Kanban Board / Card Detail |
| 折叠交互 | reasoning、tool calls 按类型折叠 |
| 进度条 | 卡片级 + 会话级 |
| 拖入文件 | HTML5 File API |
```

## openspec/changes/session-kanban/design.md

- Source: openspec/changes/session-kanban/design.md
- Lines: 1-23
- SHA256: f0306e55bebcd36c2518d91f83c0e9ae83c1da2a6d0d9868b2d7ed0116f678bd

```md
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
```

## openspec/changes/session-kanban/tasks.md

- Source: openspec/changes/session-kanban/tasks.md
- Lines: 1-28
- SHA256: abe62ace98e1fc4ee54cdc54fddc204cbb92afc6a699cc93a399bbdef253e8ce

```md
# Session JSON 看板 — TODO 清单

## 第一阶段：数据解析引擎

- [ ] **T1.1** 实现 session.json 解析器：提取 info、messages、parts
- [ ] **T1.2** 实现 todowrite 扫描：从 tool calls 中提取 todos 及其状态变化
- [ ] **T1.3** 实现消息归类：按 todowrite 变化区间将 messages parts 归入对应 TODO
- [ ] **T1.4** 工具调用分类：按 tool 类型（bash/skill/task/write/edit/read/glob/grep/todowrite）提取标签

## 第二阶段：UI 渲染

- [ ] **T2.1** 实现 Session Info Bar：标题、模型、耗时、token、文件变更、总进度条
- [ ] **T2.2** 实现 Kanban Board 三列布局（待办/进行中/已完成）
- [ ] **T2.3** 实现卡片组件（折叠态）：标题、进度条、状态标签、AI 摘要、工具计数
- [ ] **T2.4** 实现卡片展开态：用户输入（折叠）、思考过程（折叠）、工具列表（折叠）、AI 文本（展开）
- [ ] **T2.5** 实现各部分折叠/展开交互

## 第三阶段：文件拖入与错误处理

- [ ] **T3.1** 实现拖拽文件上传（dragenter/dragover/drop + FileReader）
- [ ] **T3.2** 实现无效 JSON 友好提示
- [ ] **T3.3** 实现缺字段降级

## 第四阶段：打磨与实时扩展预留

- [ ] **T4.1** 样式打磨：响应式布局、过渡动画、颜色系统
- [ ] **T4.2** 抽象数据源接口（为实时数据扩展做准备）
- [ ] **T4.3** 集成测试：用真实 session.json 验证渲染效果
```

