# Proposal: 制品只读状态区分与图标优化

## 变更动机
在看板 UI 中，当 AI 使用 `read` / `view_file` 等只读工具读取文件时，原逻辑一律将其状态标记为 `'modified'` 并渲染为笔的图标 `✏️`，这给用户带来了“文件被修改”的错误直觉。

## 目标
区分制品的“读取/查看”与“写入/修改”状态。为只读状态（`read`）引入专门的 `📖` 图标，消除歧义。

## 范围
- 仅修改前端 `index.html` 的 `extractArtifacts` 与 `artifactIcon` 逻辑。
