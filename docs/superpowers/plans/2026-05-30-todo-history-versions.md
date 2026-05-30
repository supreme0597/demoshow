# 看板历史 TODO 版本追溯功能实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 index.html 中实现多规划版本（历史 TODO）的提取、切换与重新仿真渲染，帮助用户及领导查看和追溯该会话中生成过的历史 TODO 版本。

**Architecture:** 
1. 编写 `extractTodoVersions` 替换单一 todos 提取；
2. 为每个规划版本预计算仿真 `cards` 状态并写入 `viewModel`；
3. 在 InfoBar 增加精致的版本下拉菜单；
4. 实现 `switchTodoVersion` 并重新调用 `attachPhaseTodos` 与 `renderApp`。

**Tech Stack:** JavaScript (ES6+), Vanilla HTML5/CSS3

---

### Task 1: 重构数据解析引擎以支持多版本

**Files:**
- Modify: `index.html:624-637` (重构 `parseSession`，并在其上方添加 `extractTodoVersions` 辅助函数)

- [ ] **Step 1: 在 parseSession 上方定义 extractTodoVersions**

  在 `index.html` 中 `/* ========== Parse Session ========== */` 下方、`parseSession` 上方加入 `extractTodoVersions` 的定义：
  ```javascript
    function extractTodoVersions(timeline) {
      const versions = [];
      let count = 0;
      for (const event of timeline) {
        if (event.type === 'tool' && event.part?.tool === 'todowrite') {
          const rawTodos = event.part.state?.input?.todos;
          if (Array.isArray(rawTodos) && rawTodos.length) {
            count++;
            const todos = rawTodos.map((todo, idx) => ({ ...todo, index: idx }));
            const title = event.part.state?.title || `规划版本 V${count}`;
            versions.push({
              versionIndex: count - 1,
              id: `v${count}`,
              title: title,
              messageIndex: event.messageIndex,
              todos: todos
            });
          }
        }
      }
      return versions;
    }
  ```

- [ ] **Step 2: 重构 parseSession 支持多版本缓存计算**

  修改 `parseSession` 的定义，使其同时解析多个版本并为每个版本做 group/finalize 预处理：
  ```javascript
    function parseSession(session) {
      const messages = session.messages || [];
      const timeline = buildTimeline(messages);
      
      const todoVersions = extractTodoVersions(timeline);
      const activeVersionIndex = todoVersions.length > 0 ? todoVersions.length - 1 : -1;
      
      if (todoVersions.length > 0) {
        const order = { completed: 0, in_progress: 1, pending: 2 };
        for (const ver of todoVersions) {
          ver.sortedTodos = [...ver.todos].sort(
            (a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9) || a.index - b.index
          );
          const verCards = groupMessagesToCards(timeline, ver.sortedTodos);
          attachGlobalDiffs(verCards, collectGlobalDiffs(messages));
          for (const card of verCards) finalizeCard(card);
          ver.cards = verCards;
        }
      }

      const steps = extractSteps(messages);
      const phases = aggregatePhases(steps);
      
      const activeVer = todoVersions[activeVersionIndex];
      const todos = activeVer ? activeVer.sortedTodos : [];
      const cards = activeVer ? activeVer.cards : fallbackCards(timeline);
      
      attachPhaseTodos(phases, todos, steps);

      return { session, todoVersions, activeVersionIndex, todos, cards, steps, phases };
    }
  ```

- [ ] **Step 3: 运行 Node.js 脚本验证解析逻辑正确性**

  在终端运行语法与解析测试脚本：
  Run: `node -e "const fs=require('fs'); const s=JSON.parse(fs.readFileSync('session3.json','utf8')); const html=fs.readFileSync('index.html','utf8'); const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n'); new Function('session', scripts + '\nconst vm = parseSession(session); console.log(\"Versions found:\", vm.todoVersions.length); if (vm.todoVersions.length !== 2) throw new Error(\"Expected 2 versions\");')(s);" `
  Expected: 输出 `Versions found: 2` 并且无报错。

- [ ] **Step 4: 提交修改**

  ```bash
  git add index.html
  git commit -m "feat: 解析引擎支持多 TODO 规划版本预提取与仿真计算"
  ```

---

### Task 2: 添加版本选择器样式支持

**Files:**
- Modify: `index.html` (在 Style 块内增加 `.version-switcher` 及其子元素样式)

- [ ] **Step 1: 新增样式规则**

  在 `index.html` 中寻找 `.info-bar` 的相关样式定义（约 68 行），在下方插入：
  ```css
    /* 版本选择器样式 */
    .version-switcher {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-right: 8px;
    }
    .switcher-label {
      color: var(--text-secondary);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
    .switcher-select {
      background: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border);
      border-radius: 7px;
      padding: 4px 28px 4px 8px;
      font-size: 12px;
      cursor: pointer;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 8px center;
      background-size: 12px;
    }
    .switcher-select:hover {
      border-color: var(--accent);
    }
    .switcher-select:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
    }
  ```

- [ ] **Step 2: 验证样式文件语法**

  检查 HTML 语法正确性：
  Run: `node -e "const fs=require('fs'); require('child_process').execSync('node -e \"' + fs.readFileSync('index.html','utf8').replace(/\"/g, '\\\"') + '\"')"` (或仅执行 `node -e` 的基础静态校验)
  Actually Run: `node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n'); new Function(scripts); console.log('Syntax OK');"`
  Expected: 输出 `Syntax OK`。

- [ ] **Step 3: 提交样式修改**

  ```bash
  git add index.html
  git commit -m "style: 增加规划版本选择器下拉菜单的 Premium UI 样式"
  ```

---

### Task 3: 改造 InfoBar 以支持版本下拉菜单渲染

**Files:**
- Modify: `index.html` (更新 `renderInfoBar` 函数)

- [ ] **Step 1: 修改 renderInfoBar 的渲染模板**

  定位到 `renderInfoBar` 的定义（约 1547 行），将其重构为：
  ```javascript
    function renderInfoBar(session, todos, viewModel) {
      const info = session.info || {};
      const done = todos.filter((todo) => todo.status === 'completed').length;
      const total = todos.length || 1;
      const created = info.time?.created || 0;
      const updated = info.time?.updated || created;
      const seconds = created && updated ? Math.max(0, Math.round((updated - created) / 1000)) : 0;
      
      let versionSelectHtml = '';
      if (viewModel.todoVersions && viewModel.todoVersions.length > 1) {
        const options = viewModel.todoVersions.map((ver, idx) => {
          const isSelected = idx === viewModel.activeVersionIndex ? 'selected' : '';
          let label = '';
          if (idx === 0) {
            label = `V1: 首次规划 (${ver.todos.length}个待办)`;
          } else if (idx === viewModel.todoVersions.length - 1) {
            label = `V${idx + 1}: ${ver.title} (最新, ${ver.todos.length}个待办)`;
          } else {
            label = `V${idx + 1}: ${ver.title} (${ver.todos.length}个待办)`;
          }
          return `<option value="${idx}" ${isSelected}>${escapeHtml(label)}</option>`;
        }).join('');
        
        versionSelectHtml = `
          <div class="version-switcher">
            <span class="switcher-label">📅 规划版本:</span>
            <select class="switcher-select" onchange="switchTodoVersion(this.value)">
              ${options}
            </select>
          </div>
        `;
      }

      infoBar.innerHTML = `
        <div class="info-bar">
          <div class="info-row">
            <div class="info-title">${escapeHtml(info.title || 'Untitled Session')}</div>
            <div class="info-actions">
              ${versionSelectHtml}
              <div class="info-meta">${escapeHtml(info.model?.id || info.model?.modelID || 'unknown model')} · ${formatDuration(seconds)} · ${formatTokens(info.tokens)} · ${formatSummary(info.summary)}</div>
              <button class="action-button" type="button" onclick="fileInput.click()">导入 JSON</button>
              <button class="action-button" type="button" onclick="clearCachedSession()">清除</button>
            </div>
          </div>
          <div class="global-progress">
            <div class="progress-track"><div class="progress-fill" style="width:${Math.round(done / total * 100)}%"></div></div>
            <div class="progress-label">总进度 ${done}/${total}</div>
          </div>
        </div>`;
    }
  ```

- [ ] **Step 2: 验证编译与语法**

  Run: `node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n'); new Function(scripts); console.log('Syntax OK');"`
  Expected: 输出 `Syntax OK`。

- [ ] **Step 3: 提交代码修改**

  ```bash
  git add index.html
  git commit -m "feat: 实现 InfoBar 头部规划版本下拉切换器的 DOM 渲染"
  ```

---

### Task 4: 实现全局版本切换核心逻辑

**Files:**
- Modify: `index.html` (在合适位置定义全局的 `switchTodoVersion` 切换函数)

- [ ] **Step 1: 在 index.html 中插入 switchTodoVersion 逻辑**

  在 `renderApp` 上方（或紧随其后的合适位置，比如在 `switchView` 附近，约 1535 行）添加 `switchTodoVersion` 函数定义：
  ```javascript
    window.switchTodoVersion = function(versionIndex) {
      const idx = parseInt(versionIndex, 10);
      if (isNaN(idx) || !viewModelCache || !viewModelCache.todoVersions || !viewModelCache.todoVersions[idx]) return;
      
      viewModelCache.activeVersionIndex = idx;
      const ver = viewModelCache.todoVersions[idx];
      viewModelCache.todos = ver.sortedTodos;
      viewModelCache.cards = ver.cards;
      
      // 同步刷新 phase 关联的 todo 状态
      attachPhaseTodos(viewModelCache.phases, ver.sortedTodos, viewModelCache.steps);
      
      // 重新执行渲染刷新
      renderApp(viewModelCache);
    };
  ```

- [ ] **Step 2: 验证全局函数挂载及测试**

  执行测试，保证 `window.switchTodoVersion` 定义正确：
  Run: `node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n'); new Function('window', scripts + '\nif(typeof window.switchTodoVersion !== \"function\") throw new Error(\"switchTodoVersion not exposed\");')({}); console.log('Exposition OK');"`
  Expected: 输出 `Exposition OK`。

- [ ] **Step 3: 提交修改**

  ```bash
  git add index.html
  git commit -m "feat: 实现全局 TODO 版本切换函数 switchTodoVersion 并重绘视图"
  ```

---

### Task 5: 回归自测与功能确认

- [ ] **Step 1: 运行最终静态集成校验**

  Run: `node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n'); new Function(scripts); console.log('HTML Scripts Syntax Verification Pass');"`
  Expected: 输出 `HTML Scripts Syntax Verification Pass`。

- [ ] **Step 2: 拖入 session3.json 验证版本切换**

  - 打开浏览器（`http://localhost:57188` 上如果缓存了 session3.json，它会自动加载。或者你可以通过 file:// 协议直接双击 `index.html` 并拖入 `session3.json`）。
  - 确认右上角显示了 `V2: 重新分析真实问题 (最新, 7个待办)` 的下拉框。
  - 切换到 `V1: 首次规划 (9个待办)`，检查看板是否变成了 9 列，且轨迹能够完美显示在卡片上。
  - 重新切换回 V2，检查是否渲染为 7 列。
