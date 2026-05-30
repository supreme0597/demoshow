# Design: 制品只读状态区分与图标优化

## 修改位置
- [index.html](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/index.html)

## 实现说明
1. **状态分类精细化**：
   在 `extractArtifacts` 提取 tools 路径时，若 `event.part.tool` 属于 `read`、`read_file`、`view_file`，则将其 status 设置为 `'read'`，而非 `'modified'`。
2. **图标映射更新**：
   在 `artifactIcon(status)` 函数中，增加对 `'read'` 状态的判定，并返回 `📖` 图标。
