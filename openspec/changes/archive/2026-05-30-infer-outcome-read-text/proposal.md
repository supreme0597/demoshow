# Proposal: 看板文案推导优化（区分产出与参考）

## 变更动机
由于看板只读文件状态 `'read'` 的引入，原先粗暴的 `inferOutcome` 文案推导（将所有制品均描述为“产出 XXX 制品”）已不再准确。只读文件应当被描述为“参考/读取”，而非“产出”。

## 目标
重构 `inferOutcomeFromTurn` 和 `inferOutcomeFromCard` 函数，对非只读制品（`status !== 'read'`）和只读制品进行分别推导：
- 仅有只读时：描述为“参考了 XXX 文件”。
- 仅有产出时：描述为“产出了 XXX 制品”。
- 混合时：描述为“产出了 XXX，并参考了 YYY”。

## 范围
- 仅修改 `index.html` 中的文案推导函数。
