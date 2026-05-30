# 看板事件拓扑分发引擎改进实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现基于 `parentID` 的主干消息链提取与时序仿真算法，确保批量更新状态时的焦点反向侦测和吸附通道的正确关闭，提升卡片归属的准确性。

**Architecture:** 
1. 构建 `extractActiveMessageChain` 提取树形对话主链，屏蔽废弃分支；
2. 强化 `groupMessagesToCards` 的仿真状态机，已完成任务的卡片吸附通道永久关闭；
3. 引入 `detectRealFocusCard` 逻辑，在批量 `in_progress` 激活时，通过扫描后继补丁文件基底反推真正的焦点卡片。

**Tech Stack:** JavaScript (ES6+), Node.js, HTML5

---

### Task 1: 实现主干消息链提取算法

**Files:**
- Modify: `index.html:584-595` (在 `buildTimeline` 内部引入 `extractActiveMessageChain` 辅助函数)

- [ ] **Step 1: 编写 extractActiveMessageChain 辅助函数并集成到 buildTimeline**
  
  在 `index.html` 中修改 `buildTimeline(messages)` 的定义。修改为以下代码：
  
  ```javascript
      function extractActiveMessageChain(messages) {
    if (!messages || !messages.length) return [];
    const idMap = new Map();
    for (const msg of messages) {
      const id = msg.id || msg.info?.id;
      if (id) idMap.set(id, msg);
    }
    const activeChain = [];
    let current = messages[messages.length - 1];
    while (current) {
      activeChain.unshift(current);
      const parentId = current.parentID || current.info?.parentID;
      current = parentId ? idMap.get(parentId) : null;
    }
    return activeChain;
  }

  function buildTimeline(messages) {
    const events = [];
    const activeChain = extractActiveMessageChain(messages);
    for (const [messageIndex, message] of activeChain.entries()) {
      const role = message.info?.role || 'unknown';
      const time = message.info?.time?.created || message.info?.time?.completed || 0;
      for (const [partIndex, part] of (message.parts || []).entries()) {
        const eventTime = part.time?.start || part.time?.end || time;
        events.push({ type: part.type, role, time: eventTime, message, messageIndex, partIndex, part });
      }
    }
    return events.sort((a, b) => a.time - b.time);
  }
  ```

- [ ] **Step 2: 运行测试验证语法正确性**
  
  Run: `node /Users/laiyouxu/.gemini/antigravity-ide/brain/81c543df-18f2-45c7-8529-ed93beb2eaa0/scratch/debug_attribution.js`
  Expected: 命令成功执行，输出 TODO 列表及卡片分配结果，无语法报错。

- [ ] **Step 3: 提交修改**
  
  ```bash
  git add index.html
  git commit -m "feat: 引入基于 parentID 的主干消息链提取逻辑"
  ```

---

### Task 2: 实现已完成任务卡片吸附通道永久关闭仿真

**Files:**
- Modify: `index.html:690-697` (更新 fallback 目标卡片的选取逻辑)

- [ ] **Step 1: 修改 groupMessagesToCards 中的 fallback 选取**
  
  在 `index.html` 对应位置，如果 `targetCards.size === 0`，原本选取当前卡片或第一个 `in_progress` 卡片。重构该过滤逻辑，添加“吸附通道关闭”保障：
  
  ```javascript
        if (targetCards.size === 0) {
        const fallback = (currentCard && currentCard.tempStatus === 'in_progress')
          ? currentCard
          : cards.find(c => c.tempStatus === 'in_progress') || currentCard;
        
        if (fallback && fallback.tempStatus === 'completed') {
          const activeCard = cards.find(c => c.tempStatus === 'in_progress') || cards.find(c => c.tempStatus === 'pending');
          if (activeCard) targetCards.add(activeCard);
        } else if (fallback) {
          targetCards.add(fallback);
        }
      }
  ```

- [ ] **Step 2: 运行测试进行回归验证**
  
  Run: `node /Users/laiyouxu/.gemini/antigravity-ide/brain/81c543df-18f2-45c7-8529-ed93beb2eaa0/scratch/debug_attribution.js`
  Expected: 分配正常，已完成的卡片没有吸附其后发生的无关联 `bash` 命令或推理。

- [ ] **Step 3: 提交修改**
  
  ```bash
  git add index.html
  git commit -m "feat: 实现已完成卡片吸附通道的仿真级硬关闭"
  ```

---

### Task 3: 实现焦点反向侦测算法并集成

**Files:**
- Modify: `index.html:650-675` (修改 `groupMessagesToCards` 在 `todowrite` 时的焦点选取逻辑)

- [ ] **Step 1: 新增 detectRealFocusCard 侦测函数**
  
  在 `index.html` 内部 `groupMessagesToCards` 前方增加该辅助函数的定义：
  
  ```javascript
      function detectRealFocusCard(todowriteEvent, activeChain, currentMsgIndex, cards) {
      const inputTodos = todowriteEvent.part.state?.input?.todos || [];
      const candidateCards = cards.filter(c => {
        const live = inputTodos.find(t => t.content === c.todo.content);
        return live && live.status === 'in_progress';
      });

      if (candidateCards.length <= 1) {
        return candidateCards[0] || null;
      }

      for (let i = currentMsgIndex + 1; i < activeChain.length; i++) {
        const nextMsg = activeChain[i];
        const parts = nextMsg.parts || [];
        for (const part of parts) {
          if (part.type === 'patch' || part.type === 'diffs') {
            const filePath = part.filePath || part.state?.input?.filePath || '';
            if (filePath) {
              const matchedCard = candidateCards.find(c => {
                const todoContent = c.todo.content.toLowerCase();
                const fileBasename = filePath.split('/').pop().toLowerCase();
                return todoContent.includes(fileBasename);
              });
              if (matchedCard) return matchedCard;
            }
          }
        }
      }
      return candidateCards[0] || null;
    }
  ```

- [ ] **Step 2: 在 groupMessagesToCards 的 todowrite 拦截点调用 detectRealFocusCard**
  
  在 `groupMessagesToCards` 中，遇到 `todowriteEvent` 处进行如下重构：
  
  ```javascript
        if (todowriteEvent) {
          const inputTodos = todowriteEvent.part.state?.input?.todos || [];
          for (const card of cards) {
            if (card === initCard) continue;
            const liveTodo = inputTodos.find((t) => t.content === card.todo.content);
            if (liveTodo) {
              card.tempStatus = liveTodo.status;
            }
          }
          const activeChain = extractActiveMessageChain(timeline.map(e => e.message).filter((m, idx, self) => self.indexOf(m) === idx));
          const activeCard = detectRealFocusCard(todowriteEvent, activeChain, msgIndex, cards) || pickActiveCard(todowriteEvent, cards);
          currentCard = activeCard || cards[hasPreEvents ? 1 : 0];
          targetCards.add(currentCard);
        }
  ```

- [ ] **Step 3: 运行完整自测**
  
  Run: `node /Users/laiyouxu/.gemini/antigravity-ide/brain/81c543df-18f2-45c7-8529-ed93beb2eaa0/scratch/debug_attribution.js`
  Expected: 顺利运行，多 `in_progress` 时能正确找到后继 patch 指向的卡片。

- [ ] **Step 4: 提交修改**
  
  ```bash
  git add index.html
  git commit -m "feat: 引入多 in_progress 情况下的焦点卡片反向侦测逻辑"
  ```
