# 变更提案: 在 Turn 级别渲染 AI 过程摘要

## 问题描述
在目前的看板 UI 中，如果一个 Turn（消息回合）包含前置的过程文本（通常存储在 `turn.processTexts` 中，例如“分析完成：项目问题清单”关键结论），这些关键的过程文本在网页的 Turn 渲染区域中是完全缺失的，用户无法看到中间生成的文本信息。

## 根因分析
在 [index.html](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/index.html) 中，定义了渲染 Turn 过程摘要的函数 `renderTurnProcess(turn)`，但是该函数只被定义了，从未在 `renderTurn` 中被调用。

## 修复目标
在 `renderTurn` 渲染 Turn 的模板中引入 `renderTurnProcess` 函数的调用，确保过程摘要文本可以被展示在 Turn 进展气泡的上方。
