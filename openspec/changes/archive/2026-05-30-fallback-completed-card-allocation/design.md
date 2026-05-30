# 修复设计: 优化 fallback 卡片强转 pending 的匹配机制

## 修复方案
在 [index.html](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/index.html) 的 `groupMessagesToCards` 函数中，对 fallback completed 卡片的处理做如下修改：

```javascript
-         if (fallback && fallback.tempStatus === 'completed') {
-           const activeCard = cards.find(c => c.tempStatus === 'in_progress') || cards.find(c => c.tempStatus === 'pending');
-           if (activeCard) targetCards.add(activeCard);
-         } else if (fallback) {
-           targetCards.add(fallback);
-         }
+         if (fallback && fallback.tempStatus === 'completed') {
+           const activeCard = cards.find(c => c.tempStatus === 'in_progress');
+           if (activeCard) {
+             targetCards.add(activeCard);
+           } else {
+             targetCards.add(fallback);
+           }
+         } else if (fallback) {
+           targetCards.add(fallback);
+         }
```

通过此修改，如果没有处于 `in_progress` 的正在运行的卡片，我们绝不把总结文本丢给还没开始的 `pending` 卡片，而是保留在刚完成的卡片中作为最终分析报告。
