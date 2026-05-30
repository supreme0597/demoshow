# 修复设计: 启用 Turn 过程摘要渲染

## 修复方案
在 [index.html](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/index.html) 的 `renderTurn` 函数中，在用户输入 `renderUserBubble` 或任务目标 `goalHtml` 之后、以及在最终成果 `renderTurnFinalBubble` 之前，插入 `renderTurnProcess(turn)` 的 HTML。

```javascript
    function renderTurn(card, turn, index, totalTurns) {
      const goalHtml = index === 0 && card.taskGoal ? `<div class="message-row user"><div class="bubble user-bubble"><span class="bubble-label">🎯 任务目标</span>${renderLongText(card.taskGoal)}</div><div class="avatar user-avatar">G</div></div>` : '';
      const isLastTurn = index === totalTurns - 1;
      return `<section class="turn-block">
        <div class="artifact-title">Turn ${index + 1}</div>
        ${goalHtml}
        ${turn.userMessages.length ? turn.userMessages.map((event) => renderUserBubble(partText(event.part))).join('') : ''}
+       ${renderTurnProcess(turn)}
        ${renderTurnFinalBubble(card, turn, isLastTurn)}
        ${renderTurnTraceability(turn)}
      </section>`;
    }
```
由于 `renderTurnProcess(turn)` 包含了 `<div style="width:24px;flex-shrink:0"></div>` 来为 AI 头像占位，它能够完美对齐底部的 AI 最终成果气泡。
