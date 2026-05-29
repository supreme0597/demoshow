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
