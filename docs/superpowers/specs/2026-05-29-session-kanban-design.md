---
comet_change: session-kanban
role: technical-design
canonical_spec: openspec
archived-with: 2026-05-29-session-kanban
status: final
---

# Session JSON Kanban Dashboard — Design Doc

## 概述

将 opencode 导出的 `session.json` 拖入浏览器，渲染为一个面向复盘和汇报的可视化看板。每个 `todowrite` TODO 任务是一张横向并排的任务卡片。卡片顶部保留任务标题、状态标签和进度条；卡片内部纵向滚动，默认展示用户输入、AI 最终成果、制品和 AI 过程摘要；完整对话、思考过程、工具调用和 SubAgent 调用折叠保留，保证可追溯。

## 数据源

输入：用户拖入的 `session.json` 文件。纯浏览器端解析，无服务端依赖。

## 数据解析映射

### 顶层结构

```
session.json
├── info
│   ├── title                 → Session Info Bar 标题
│   ├── model                 → 模型标签
│   ├── agent                 → agent 类型
│   ├── time                  → 时间范围/耗时
│   ├── tokens                → token 统计
│   └── summary               → 文件变更汇总
└── messages[]
    ├── info.role             → user / assistant
    ├── info.time             → 消息时间
    ├── info.summary.diffs    → 文件制品/代码变更来源之一
    └── parts[]
        ├── type: text        → 用户输入或 AI 回复
        ├── type: reasoning   → 思考过程，折叠保留
        ├── type: tool        → 工具/skill/SubAgent/todowrite
        ├── type: patch       → 文件制品/代码变更来源之一
        ├── type: step-start  → 隐藏
        └── type: step-finish → 隐藏
```

### TODO 任务提取

- 扫描所有 `messages[].parts[]` 中 `type == "tool" && tool == "todowrite"` 的调用。
- 提取 `state.input.todos[]` 数组。
- 每个 todo 对象包含：`content`、`status`、`priority`。
- 取最后一次完整 `todos` 快照作为最终任务列表。
- 每个 TODO 生成一张任务卡片。
- 排序：`completed` → `in_progress` → `pending`，同状态内按出现顺序。

### 消息归类

- 追踪 `todowrite` 中 `in_progress` 的 TODO。
- 两次 `todowrite` 调用之间的 assistant 消息默认归入当前 in-progress TODO。
- 如果无法确定当前 TODO，归入最近一个发生状态变化的 TODO。
- 用户消息按时间向后归入最近相关 TODO，作为卡片内默认可见的用户输入。
- AI 文本消息按时间归入 TODO，其中最后一个有效 AI 文本作为“最终成果”候选，其余归入“AI 过程摘要/完整对话”。

### 制品提取

制品来源：

- `messages[].info.summary.diffs[]`：文件路径、增删行、patch。
- `parts[].type == "patch"`：文件变更列表。
- `tool == "write" | "edit"`：`state.input.filePath` 或工具 title 中的文件路径。

制品展示规则：

- 默认展示文件路径标签。
- 新增文件显示 `➕`，修改文件显示 `✏️`，删除文件显示 `🗑️`。
- 若有 patch/diff，提供“查看代码变更”折叠区域。
- 无制品的卡片不展示 `📎 制品` 区域。

## UI 布局

### 页面结构

```
┌──────────────────────────────────────────────────────────┐
│ Session Info Bar                                         │
│ 标题 | 模型 | 耗时 | Tokens | 文件变更 | 总进度条         │
├──────────────────────────────────────────────────────────┤
│ ┌──── Task Card 1 ────┐ ┌──── Task Card 2 ────┐ ┌── ... ┐ │
│ │ 标题 + 状态 + 进度条 │ │ 标题 + 状态 + 进度条 │ │       │ │
│ │ 用户输入             │ │ 用户输入             │ │       │ │
│ │ AI 最终成果 + 制品   │ │ AI 当前进展 + 制品   │ │       │ │
│ │ AI 过程摘要          │ │ AI 过程摘要          │ │       │ │
│ │ 追溯详情(折叠)       │ │ 追溯详情(折叠)       │ │       │ │
│ └────────────────────┘ └────────────────────┘ └───────┘ │
│ ← 水平滚动                                               │
└──────────────────────────────────────────────────────────┘
```

### Session Info Bar

顶部固定展示：

- 会话标题：`info.title`
- 模型：`info.model.id`
- 耗时：`info.time.updated - info.time.created`
- Tokens：`info.tokens.input/output/reasoning/cache`
- 文件变更：`info.summary.additions/deletions/files`
- 总进度条：`completed todos / total todos`

### 卡片外部顶部

每张卡片顶部必须始终保留：

- 状态圆点。
- 任务标题：`todo.content`，过长省略。
- 状态标签：`✅ 已完成`、`🔄 进行中`、`📋 待办`。
- 细进度条：已完成 100% 绿色，进行中 40% 黄色，待办空灰色。

### 卡片横向布局

- 多张卡片横向并排。
- 卡片区域水平滚动。
- 卡片宽度：`min-width: 390px`，`max-width: 430px`。
- 卡片高度：`calc(100vh - info bar)` 或固定设计高度。
- 卡片内部 `overflow-y: auto`，内容纵向滚动。

## 卡片内部内容顺序

卡片内部按以下顺序渲染，不互相替换：

1. 用户输入：默认可见，蓝色气泡靠右，头像 `U`。
2. AI 最终成果/当前进展：默认可见，绿色或黄色强调边框，头像 `AI`。
3. 制品：默认可见，展示文件标签；代码变更可折叠。
4. AI 过程摘要：默认可见，展示非最终的关键 AI 回复摘要。
5. 追溯详情：折叠区域，包含完整对话、思考过程、工具调用、SubAgent 调用。

## 消息样式

### 用户输入

- 靠右。
- 浅蓝气泡：`#e8f4fd`。
- 深色文本。
- 右侧蓝色圆形头像 `U`。
- 内容过长时默认截断，显示 `[展开]`。

### AI 输出

- 靠左。
- 绿色圆形头像 `AI`。
- 最终成果使用绿色左边框。
- 进行中任务使用黄色左边框和“当前进展”标签。
- 中间过程使用普通灰色气泡。
- 内容过长时默认截断，显示 `[展开]`。

## 折叠层级

### 第一层：默认可见

- 用户输入。
- AI 最终成果/当前进展。
- 制品标签。
- AI 过程摘要。

### 第二层：追溯详情

折叠标题：`追溯详情（对话 · 思考 · 工具 · SubAgent）`

包含：

- 完整对话：用户和 AI 的全部相关消息，按时间顺序。
- 思考过程：`type == reasoning`。
- 工具调用：`type == tool`，仅显示名称和标题。
- SubAgent：`tool == task` 或 subagent 语义的工具调用。

### 第三层：工具/制品细节

- 工具入参。
- 工具输出摘要。
- 完整输出。
- 代码 diff/patch。

## 工具展示规则

| 工具类型 | 默认展示 | 展开后 |
|----------|----------|--------|
| `skill` | `📦 skill: <name>` | skill 输入/输出 |
| `bash` | `💻 bash: <description>` | command、exit code、output 摘要 |
| `task` | `🤖 task: <description>` | SubAgent 完整输出 |
| `todowrite` | `✅ todowrite` | todos 状态变化 |
| `write/edit` | `✏️ write/edit: <path>` | 文件路径、diff 摘要 |
| `read` | `📖 read: <path>` | 文件路径 |
| `glob/grep` | `🔍 search: <pattern>` | 匹配结果摘要 |

`step-start` 和 `step-finish` 默认隐藏。

## 状态和进度

| TODO status | 状态标签 | 圆点 | 进度条 | 卡片透明度 |
|-------------|----------|------|--------|------------|
| `completed` | `✅ 已完成` | 绿色 | 100% 绿色 | 1.0 |
| `in_progress` | `🔄 进行中` | 黄色 | 40% 黄色 | 1.0 |
| `pending` | `📋 待办` | 灰色 | 空灰色 | 0.55 |

## 技术实现

### 文件结构

```
index.html
```

单文件实现，内联 HTML/CSS/JS，零依赖。

### 关键模块

- `parseSession(json)`：总解析入口。
- `extractTodos(messages)`：提取 TODO 快照。
- `buildTimeline(messages)`：按时间展开消息和 parts。
- `groupMessagesToCards(messages, todos)`：归类消息到 TODO 卡片。
- `extractArtifacts(cardParts)`：提取制品。
- `renderInfoBar(session, todos)`：渲染全局信息。
- `renderBoard(cards)`：渲染横向卡片。
- `renderCard(card)`：渲染单张任务卡片。
- `renderTraceability(card)`：渲染追溯详情。
- `toggleLongText(id)`：展开/折叠长消息。

### 错误处理

- 无效 JSON：显示解析错误。
- 无 `messages`：显示格式不兼容。
- 无 `todowrite`：降级为“按用户轮次生成卡片”。
- 工具字段缺失：显示工具类型和可用标题，忽略缺失字段。

## 实时数据扩展

保留数据源抽象：

```
Source:
  getSession() -> Promise<Session>
  onUpdate(callback) -> void
```

当前实现 `FileSource`，未来可扩展 `WebSocketSource` 或 `SSESource`。

## 设计原则

1. 不丢历史确认元素：卡片顶部、进度、状态、用户输入、AI 输出、制品、追溯详情全部保留。
2. 默认适合汇报：先看任务、状态、用户问题、最终成果和制品。
3. 完整可追溯：对话、思考、工具、SubAgent 均可展开。
4. 渐进披露：细节默认折叠，按需展开。
5. 单文件部署：拖入 JSON 即用。
