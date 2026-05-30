# 验证报告: 优化 fallback 卡片的文本吸附分配逻辑

本报告记录了在未关联工具调用的文本消息进行卡片分配时 fallback 逻辑的验证结果。

## 验证背景
在解析 `session2.json` 时，第一张卡片（分析现状）的 `todowrite` 工具调用在第一条 AI 消息中将其状态标记为了 `completed`。下一条紧随其后的纯文本消息（包含整个项目的问题分析清单）因无任何关联工具或制品更改，触发了分配上的 fallback 逻辑。

由于 fallback 指向了已完成的卡片，系统为了防止“已完成卡片继续吸附新内容”，盲目地将其强转给当时尚未开始的 `pending` 状态卡片。而在随后的 `finalizeCard` 阶段，所有的 `pending` 状态卡片的 turns 与 artifacts 都会被强制删除以保持待办卡片界面的干净。最终导致这一段最核心的分析文本在看板 UI 上完全消失。

## 验证方法
通过 Node.js 本地测试脚本 [inspect_turns.js](file:///Users/laiyouxu/.gemini/antigravity-ide/brain/81c543df-18f2-45c7-8529-ed93beb2eaa0/scratch/inspect_turns.js)，利用真实的 `session2.json` 数据加载 `groupMessagesToCards` 的解析分配过程，检查各 Card 及对应 Turn 的分配数量与文本状态。

## 验证结果
在修改了 `index.html` 的 fallback completed 转接逻辑后，如果没有处于 `in_progress` 的活动卡片，文本绝不会被强转给 `pending` 卡片，而是保留在原已完成的 `fallback`（Card 1）中。

运行测试输出如下：
```text
[Card 1] completed (tempStatus: completed): 分析 opencode-kanban 项目现状与问题
  Turns Count: 2
    Turn 1:
      userMessages: 0
      aiTexts: 1
        aiTexts[0]: "现在我已经全面了解了项目。以下是我的分析：..."
      processTexts: 0
      finalText: "现在我已经全面了解了项目。以下是我的分析：..."
    Turn 2:
      userMessages: 0
      aiTexts: 1
        aiTexts[0]: "## 分析完成：opencode-kanban 项目问题清单  当前项目状态：**无活跃 change**，所有 3 个 prior changes 均已归档。..."
      processTexts: 0
      finalText: "## 分析完成：opencode-kanban 项目问题清单  当前项目状态：**无活跃 change**，所有 3 个 prior changes 均已归档。..."
```
问题文本成功作为 Turn 2 留在了 Card 1 中。由于 Card 1 为已完成状态，其 Turns 数据会被正确渲染并持久保留在网页端。

## 结论
修改彻底解决了纯文本总结在 fallback 转移机制中被转移至 pending 卡片进而导致内容丢失的 Bug。
