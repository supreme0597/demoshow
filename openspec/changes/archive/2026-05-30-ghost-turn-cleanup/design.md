# Design: 幽灵 Turn 过滤设计

## 修改位置
- 文件：[index.html](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/index.html)
- 函数：`finalizeCard` (在第 962 行附近)

## 修复思路
在完成每个 Turn 的 `finalizeTurn` 处理后，通过对 `card.turns` 进行过滤来移除所有没有任何可见内容的 "幽灵 Turn"。

### 判断幽灵 Turn 的标准
如果一个 Turn 满足以下**所有**条件，则视其为“幽灵 Turn”（即应当被过滤掉）：
1. 没有有效内容的 AI 回复文本（`aiTexts` 为空，或者所有 `aiTexts` 的文本经 trim 后长度为 0）。
2. 没有执行任何工具、技能或子代理（`tools`、`skills` 和 `subagents` 均为空）。
3. 没有产生任何制品（`artifacts` 均为空）。
4. 没有关联任何用户消息（`userMessages` 均为空）。

在代码中表示为：
```javascript
card.turns = card.turns.filter((turn) => {
  const hasText = turn.aiTexts.some((t) => partText(t.part) && partText(t.part).trim().length > 0);
  const hasTools = turn.tools.length > 0 || turn.skills.length > 0 || turn.subagents.length > 0;
  const hasArtifacts = turn.artifacts && turn.artifacts.length > 0;
  const hasUser = turn.userMessages.length > 0;
  return hasText || hasTools || hasArtifacts || hasUser;
});
```

### 为什么这个判断是安全的？
- **有文本输出的 Turn**：包含 AI 的解释或结果（`hasText === true`），会被保留。
- **只调用了工具的 Turn**：没有文本输出但执行了命令、修改了文件等，这属于正规操作，其结果会被自动推断（`hasTools === true`），会被保留。
- **产生制品的 Turn**：即使没有文本和工具调用本身（例如只有 patch 记录），因为产出了制品（`hasArtifacts === true`），会被保留。
- **仅包含用户消息的 Turn**：比如用户发送了一条消息，AI 尚未开始回复或只在思考，这也代表了一轮对话的存在（`hasUser === true`），会被保留。
- **只有 reasoning 的 Turn**：通常是由于 Patch 事件被分发至多个卡片，但只有个别卡片真正有 diff (其他卡片的 patch 在 `extractArtifacts` 被判定为 weak 并过滤掉)，导致其他卡片上残留了一个仅包含 reasoning 的 Turn。这种 Turn 既无用户输入，无 AI 文本，无工具执行，无制品。过滤它是完全正确和安全的。
