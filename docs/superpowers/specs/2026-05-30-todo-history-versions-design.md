# 看板历史 TODO 版本追溯设计规范

## 1. 背景与目标
在 OpenCode 调试和开发会话中，AI 在面对用户的追究或调整要求时，会多次通过 `todowrite` 工具重新梳理并修改 TODO 规划。
目前看板只提取并展示最后一份 `todowrite` 结果，这导致用户（或领导）无法回溯会话初始阶段的 TODO 清单（如 V1 版本），也无法查看历史规划的演进过程。

本设计的目的是：
- 在保持看板整体精致风格的前提下，提供查看和追溯多次 `todowrite` 产生的所有 TODO 版本的交互能力。
- 选择 **方案 A (下拉切换版本)**：在顶部 InfoBar 增加一个精美的“规划版本”下拉选择菜单，实现全局卡片、事件仿真挂载以及 Phase Todos 的一致性平滑切换。

---

## 2. 详细设计与实现方案

### 2.1 数据模型重构 (数据解析)
重构 `extractTodos(timeline)` 的提取逻辑：
- 变更为提取所有 `todowrite` 历史记录的函数 `extractTodoVersions(timeline)`。
- 每个版本包含：
  - `versionIndex`: 版本的索引号 (0-based)
  - `title`: `todowrite` 调用的 title（例如 "重新分析看板真实问题"），若无则使用默认值 `规划版本 VX`
  - `messageIndex`: 事件所在的 Message 索引，可用于时序关联
  - `todos`: 该版本下的所有原始 TODO 列表
  - `sortedTodos`: 按照状态优先级和序号排序后的 TODO 列表
  - `cards`: 基于该版本的 `sortedTodos` 与 Timeline 执行 `groupMessagesToCards` 动态仿真出来的卡片集 (每个版本均在解析时计算并缓存，避免切换时性能损耗)

在 `parseSession(session)` 中：
- 计算 `todoVersions = extractTodoVersions(timeline)`
- 默认设置 `activeVersionIndex = todoVersions.length - 1` (指向最新版本)
- 计算每个 `todoVersions[i].cards` 并做 `attachGlobalDiffs` 和 `finalizeCard` 预处理。
- 返回的 `viewModel` 中同时挂载 `todoVersions` 与 `activeVersionIndex`，同时保留默认暴露的 `todos` 和 `cards` 为当前激活版本的内容，对现有渲染入口保持向下兼容。

### 2.2 界面交互 (InfoBar 改造)
在 `renderInfoBar(session, todos, viewModel)` 中：
- 如果 `viewModel.todoVersions` 的长度大于 1：
  - 在“导入 JSON”按钮左侧，渲染一个极其精致的“📅 规划版本”选择菜单。
  - 下拉菜单选项采用自定义 SVG 箭头，与 Kanban 主题保持和谐，支持 Hover 与 Focus 交互。
  - 选项命名规范：`V[X]: [标题] ([待办数量]个待办)`。
    - 示例：`V1: 首次规划 (9个待办)`
    - 示例：`V2: 重新分析真实问题 (最新, 7个待办)`

### 2.3 版本切换与重新渲染 (Switching Logic)
在全局定义函数 `switchTodoVersion(versionIndex)`：
- 解析出目标索引 `idx`。
- 将 `viewModelCache.activeVersionIndex` 更新为 `idx`。
- 将 `viewModelCache.todos` 与 `viewModelCache.cards` 替换为所选版本的预计算结果。
- 关键点：重新执行 `attachPhaseTodos(viewModelCache.phases, activeVersion.sortedTodos, viewModelCache.steps)`，保证“阶段时间线”中的 phase 卡片关联的 TODO 状态也是正确的。
- 调用 `renderApp(viewModelCache)` 刷新整个看板。由于 `viewModelCache` 已就地更新，页面将在不重新拉取 JSON 的情况下实现瞬时响应切换。

---

## 3. CSS 样式扩展
添加如下精心调优的 CSS 以匹配 Kanban 整体的暗色极客风格：
```css
    /* 版本选择器样式 */
    .version-switcher {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-right: 8px;
    }
    .switcher-label {
      color: var(--text-secondary);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
    .switcher-select {
      background: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border);
      border-radius: 7px;
      padding: 4px 28px 4px 8px;
      font-size: 12px;
      cursor: pointer;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 8px center;
      background-size: 12px;
    }
    .switcher-select:hover {
      border-color: var(--accent);
    }
    .switcher-select:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
    }
```

---

## 4. 验证计划

### 4.1 单元语法验证
- 运行 Node.js 静态语法与解析测试，确保新增的 `extractTodoVersions` 及 `switchTodoVersion` 等函数无 JS 语法错误。

### 4.2 功能与交互验证
- 拖入或重新加载 `session3.json`（其中包含 Message 18 和 Message 21 两个规划版本）。
- 验证：页面右上角正确渲染“📅 规划版本”下拉选择器，默认选中 `V2: 重新分析真实问题 (最新, 7个待办)`。
- 点击下拉框切换至 `V1: 首次规划`。
- 验证：
  - 看板卡片刷新为首版 TODO 的 9 个卡片，卡片名和状态与 Message 18 吻合。
  - 各个卡片内部挂载的 Turn 仿真历史准确（如，前置调研事件只附着在初始化卡片上）。
  - 各个 Phase 下关联的 TODO 项也被更新为首版 TODO。
- 再次切换回 V2，看板能无缝恢复到最新版。
