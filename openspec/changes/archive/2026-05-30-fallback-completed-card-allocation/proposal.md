# 变更提案: 优化 fallback 卡片的文本吸附分配逻辑

## 问题描述
在 `session2.json` 数据中，Turn 1 中助手输出的“分析完成：项目问题清单”这一长串关键文本在 UI 网页上完全不显示。

## 根因分析
1. 当一条消息只有普通文本（无 tool/patch/diffs）且没有 `todowrite` 时，`groupMessagesToCards` 的匹配结果 `targetCards` 为空，进入 fallback 逻辑。
2. 此时前一条消息刚把“分析现状”卡片状态标记为 `completed`，当前 `fallback` 指向了该 completed 卡片。
3. 代码逻辑检测到 `fallback.tempStatus === 'completed'`，试图将消息分配给第一个 `in_progress` 或 `pending` 状态的卡片。由于当时没有 `in_progress` 卡片，因此它被强转分配给了下一个 `pending` 的卡片。
4. 到了 `finalizeCard(card)` 处理时，代码检测到该卡片状态为 `pending`，粗暴地把 `card.turns` 和 `card.artifacts` 全部清空了。导致这段重要的分析文本在网页上彻底消失。

## 修复目标
优化 fallback 转移逻辑。如果 `fallback` 卡片是 `completed` 状态，只有在存在 `in_progress` 的活动卡片时才进行转移以防吸附；若仅有 `pending` 卡片，则应该将文本保留在已完成的 `fallback` 卡片中（作为总结陈述），避免强转给 `pending` 卡片后在 `finalizeCard` 阶段被误删。
