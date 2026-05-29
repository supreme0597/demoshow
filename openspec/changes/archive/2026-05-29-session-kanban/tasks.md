# Session JSON 看板 — TODO 清单

## 第一阶段：数据解析引擎

- [x] **T1.1** 实现 session.json 解析器：提取 info、messages、parts
- [x] **T1.2** 实现 todowrite 扫描：从 tool calls 中提取 todos 及其状态变化
- [x] **T1.3** 实现消息归类：按 todowrite 变化区间将 messages parts 归入对应 TODO
- [x] **T1.4** 工具调用分类：按 tool 类型（bash/skill/task/write/edit/read/glob/grep/todowrite）提取标签

## 第二阶段：UI 渲染

- [x] **T2.1** 实现 Session Info Bar：标题、模型、耗时、token、文件变更、总进度条
- [x] **T2.2** 实现 Kanban Board 横向任务卡片布局
- [x] **T2.3** 实现卡片组件：标题、进度条、状态标签、用户输入、AI 最终成果、制品
- [x] **T2.4** 实现追溯详情：完整对话、思考过程、工具列表、SubAgent 输出
- [x] **T2.5** 实现各部分折叠/展开交互

## 第三阶段：文件拖入与错误处理

- [x] **T3.1** 实现拖拽文件上传（dragenter/dragover/drop + FileReader）
- [x] **T3.2** 实现无效 JSON 友好提示
- [x] **T3.3** 实现缺字段降级

## 第四阶段：打磨与实时扩展预留

- [x] **T4.1** 样式打磨：响应式布局、过渡动画、颜色系统
- [x] **T4.2** 预留数据解析/渲染分层，后续可替换为实时数据源
- [x] **T4.3** 集成测试：用真实 session.json 验证渲染效果
