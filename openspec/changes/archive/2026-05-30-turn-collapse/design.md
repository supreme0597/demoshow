# Design: 看板中间执行回合折叠

## 实现说明
1. **CSS 样式**：
   在 `index.html` 的样式表末尾添加 `.turns-collapsed` 及 `.turns-collapsed-summary` 等样式。利用 HTML5 原生 `<details>` 与 `<summary>` 实现折叠交互效果，降低交互实现的复杂性。
2. **渲染函数重构**：
   重构 `index.html` 中的 Turns 列表渲染逻辑。引入 `renderTurns(card)` 辅助函数。若 `card.turns.length > 1`，则使用 `<details>` 对前 `N-1` 个 Turns 进行包裹折叠，只保持最后一个 Turn 直显。

详细技术设计请参见：[2026-05-30-turn-collapse-design.md](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/docs/superpowers/specs/2026-05-30-turn-collapse-design.md)
