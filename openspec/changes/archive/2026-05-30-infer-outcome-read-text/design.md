# Design: 看板文案推导优化（区分产出与参考）

## 修改位置
- [index.html](file:///Users/laiyouxu/IdeaProjects/opencode-kanban/index.html)

## 实现说明
对 `inferOutcomeFromTurn` 与 `inferOutcomeFromCard` 方法重构：
1. 分离过滤：
   - 产出制品数组：`const produced = artifacts.filter(a => a.status !== 'read')`
   - 只读参考文件数组：`const readOnly = artifacts.filter(a => a.status === 'read')`
2. 条件推断拼接：
   - 优先判断并拼装 `produced` 文案，若两者并存，使用 `，并参考了 ` 进行桥接；
   - 若只有只读，使用 `参考了 ` 进行拼接。
