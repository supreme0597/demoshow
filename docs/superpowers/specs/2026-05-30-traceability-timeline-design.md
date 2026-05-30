# 设计方案：进展卡片追溯详情点阵时间线重构

## 一、概述
本设计旨在重构看板卡片中的“追溯详情”模块，去除当前繁琐的 `<details>` 手风琴折叠展开效果，依据“不展开”的扁平化原则，将各种追溯数据（完整对话、思考过程、普通工具调用、子代理调用、过程消息等）转换为优雅、直观的微型操作轨迹时间线（Micro Timeline）。同时，保留 Skill 调用的独立性，将其单独置于 AI 泡泡中并以 Markdown 格式支持展开阅读。

## 二、界面交互设计 (方案 B v3)
- **静态不展开**：追溯详情在常规状态下不占用卡片额外的物理高度，取消原有的 `<details>` 整体展开组件，以一列水平的微型操作轨迹图标（Dot）常态呈现在 Turn 的底部。
- **悬停浮窗（Popover Tooltip）**：鼠标移入图标时，Tooltip 向上并向卡片内部生长显示（避开看板卡片的外层 `overflow` 容器剪裁），且在 Tooltip 内部使用局部滚动的暗色背景框来呈现长文本日志或思考大纲。
- **Skill 独立与 Markdown 展开**：Skill 动作被单独移至 AI 回复泡泡底部的 `renderSkillsOnBubble` 模块，点击后仅局部向下展开，渲染出排版美观的 Markdown 技能文本。

```
+---------------------------------------------------+
| [🔄 进行中] 卡片标题                              |
+---------------------------------------------------+
|  🤖 AI 过程消息...                                 |
|  +---------------------------------------------+  |
|  | [AI 进展泡泡]                               |  |
|  | 任务已启动，正在运行测试...                  |  |
|  |                                             |  |
|  |  📦 brainstorming (点击可局部展开 MD)         |  |
|  +---------------------------------------------+  |
|                                                   |
|  操作轨迹: ──(💬)───(🧠)───(📖)───(💻)            |
|               |                                   |
|        +------+-------+                           |
|        | [Tooltip]    |                           |
|        | 🧠 思考过程  |                           |
|        | 4.2k tokens  |                           |
|        | ... (可滚动) |                           |
|        +--------------+                           |
+---------------------------------------------------+
```

## 三、技术实现细节

### 1. 数据分类与过滤
在 `renderTurnTraceability(turn)` 中：
- 过滤 `turn.tools`，排除其中 `part.tool === 'skill'` 的调用（因为它们已在泡泡中渲染）。
- 对话节点数据：提取自 `turn.userMessages` 和 `turn.aiTexts` 的 `partText`。
- 思考节点数据：提取自 `turn.reasoning`。
- 工具节点数据：针对剩余的 `turn.tools` 中的每一个具体调用，生成对应的节点（例如：`view_file` 生成 `📖`，`run_command` 生成 `💻` 等）。
- 子代理节点数据：针对 `turn.subagents`。

### 2. DOM 结构设计
时间线基础结构：
```html
<div class="trace-timeline">
  <span class="timeline-label">操作轨迹</span>
  <div class="timeline-line"></div>
  <div class="timeline-nodes">
    <!-- 各轨迹节点 -->
    <div class="timeline-node [chat|thought|read|write|bash|agent]">
      <span>图标</span>
      <div class="timeline-tooltip">
        <div class="tooltip-header">
          <span class="tooltip-title">标题</span>
          <span class="tooltip-meta">元数据</span>
        </div>
        <div class="tooltip-content">长内容日志 (带滚动条)</div>
      </div>
    </div>
  </div>
</div>
```

### 3. CSS 样式设计
- **Tooltip 定位与悬浮防截断**：
  ```css
  .trace-timeline {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 12px;
    border-top: 1px solid var(--border);
    padding-top: 12px;
    min-height: 36px;
  }
  .timeline-line {
    position: absolute;
    left: 60px; right: 0; top: 50%;
    height: 1px;
    background: var(--border);
    z-index: 1;
    transform: translateY(-50%);
  }
  .timeline-node {
    position: relative;
    z-index: 2;
    /* 样式代码 ... */
  }
  .timeline-tooltip {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: calc(100% + 8px);
    left: -10px;
    width: 300px;
    max-height: 220px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    padding: 10px;
    z-index: 100;
    transition: opacity 0.15s ease, visibility 0.15s ease;
    pointer-events: none; /* 默认穿透 */
  }
  .timeline-node:hover .timeline-tooltip {
    visibility: visible;
    opacity: 1;
    pointer-events: auto; /* 允许滚动与选中 */
  }
  /* 右侧边界防护 */
  .timeline-nodes .timeline-node:nth-last-child(-n+2) .timeline-tooltip {
    left: auto;
    right: -10px;
  }
  ```

## 四、验证方案
- **视觉验证**：在本地开发服务器打开 index.html。拖入测试日志 JSON，确认卡片下方的操作轨迹线水平对齐，图标颜色分明。
- **交互验证**：悬停各图标，验证 Tooltip 淡入淡出，滚动长日志时 Tooltip 不会异常消失，且靠近卡片右边缘的节点 Tooltip 能自动向内对齐，无任何遮挡和容器剪裁问题。
- **Skill 验证**：点击 AI 泡泡内部的 Skill chip 按钮，验证其可以局部展开并渲染出排版完美的 Markdown。
