# Proposal: 看板 UI 幽灵 Turn 清理

## 问题描述
在 OpenCode 看板 UI 中，部分卡片（例如 `Write design.md`）渲染出了多余的 "幽灵 Turn"（通常显示为 Turn 2，内容为 "任务已完成" 占位符和一段 reasoning 推理过程，但没有任何工具调用、文本输出或制品生成）。

## 根因分析
在 `groupMessagesToCards` 分发逻辑中，如果一个 message 包含多个文件的 patch 修改（对应多个卡片），则该 message 的 `reasoning` 事件会被复制并分发到所有相关的 target cards 中。
但是，由于部分 card 的 patch 没有具体的 diff（例如在 `extractArtifacts` 时被标记为 `weak` 并过滤掉了），这导致这些卡片最后拥有的该 message 的 turn 只有 reasoning 推理过程，而没有任何实际的可见文本、工具执行、制品或用户输入。
这就导致这些 turn 在 UI 渲染时变为了“幽灵 Turn”，只显示了“任务已完成”的占位符。

## 修复目标
在 `index.html` 的 `finalizeCard` 处理步骤中，过滤掉那些没有任何可见文本（`aiTexts` 均为空或纯空白）、没有任何工具/技能/子代理调用（`tools`/`skills`/`subagents` 均为空）、没有制品（`artifacts` 均为空）并且没有用户消息（`userMessages` 均为空）的 turns，以彻底清理 UI 中的幽灵 Turns。
