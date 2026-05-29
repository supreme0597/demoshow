---
role: technical-design
canonical_spec: openspec
comet_change: turn-collapse
status: active
---

# 设计文档: 中间执行回合折叠组件 (Turn Collapse)

## 1. 背景与目标
在 Kanban UI 中，某些卡片可能会因为频繁的工具或命令执行（例如多次 bash 运行）而产生大量的中间进行中 Turns。这会导致看板卡片整体高度过长，降低了看板的可读性和整洁度。
为了提升看板的用户体验，本设计的核心目标是将这些多余的中间执行过程（即第 1 到第 N-1 个 Turn）进行交互式折叠收纳，默认仅直显最后一个 Turn（最终成果或最新进展），并在用户需要审计时提供一键展开的交互能力。

## 2. 详细方案

### 2.1 CSS 样式增强
在 `index.html` 样式的最尾部追加专门修饰折叠组件的样式。折叠容器使用与原设计一致的虚线边框和卡片背景：

```css
    /* 中间执行回合折叠组件样式 */
    .turns-collapsed {
      display: flex;
      flex-direction: column;
      gap: 9px;
      margin-bottom: 3px;
      border: 1px dashed var(--border);
      border-radius: 8px;
      padding: 6px 10px;
      background: var(--bg-secondary);
    }
    .turns-collapsed-summary {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-secondary);
      cursor: pointer;
      outline: none;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .turns-collapsed-summary:hover {
      color: var(--accent);
    }
    .turns-collapsed[open] {
      border-style: solid;
      border-color: var(--border);
    }
    .turns-collapsed .turn-block {
      margin-top: 8px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }
    .turns-collapsed .turn-block:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }
```

### 2.2 JS 渲染重构
重构 `index.html` 的卡片内容渲染逻辑。定义 `renderTurns(card)` 辅助方法以替换原有的 map 展开：

```javascript
    function renderTurns(card) {
      if (!card.turns.length) return renderEmptyTurn(card);
      if (card.turns.length === 1) {
        return renderTurn(card, card.turns[0], 0, 1);
      }
      
      // 有多个 Turns，折叠前 N-1 个，直显最后一个
      const collapsedTurns = card.turns.slice(0, -1);
      const lastTurn = card.turns[card.turns.length - 1];
      const lastIndex = card.turns.length - 1;
      
      const collapsedHtml = `
        <details class="turns-collapsed">
          <summary class="turns-collapsed-summary">
            ⚙️ 展开/隐藏 ${collapsedTurns.length} 个中间执行回合
          </summary>
          <div class="turns-collapsed-content">
            ${collapsedTurns.map((turn, index) => renderTurn(card, turn, index, card.turns.length)).join('')}
          </div>
        </details>
      `;
      
      const lastTurnHtml = renderTurn(card, lastTurn, lastIndex, card.turns.length);
      
      return collapsedHtml + lastTurnHtml;
    }
```

在 `task-card` 模板中：
```diff
-           ${card.turns.length ? card.turns.map((turn, index) => renderTurn(card, turn, index, card.turns.length)).join('') : renderEmptyTurn(card)}
+           ${renderTurns(card)}
```

## 3. 验证计划
1. 在本地启动或用测试脚本验证 `renderTurns` 是否输出预期的 DOM 结构。
2. 确保在单 Turn 的卡片上显示正常。
3. 确保在多 Turns 的卡片上（如 `Initialize .comet.yaml state file` 卡片有 7 个 turns）呈现折叠面板，点击可自由折叠/展开，且直显第 7 回合的最终内容。
