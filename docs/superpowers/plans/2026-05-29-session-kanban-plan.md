---
change: session-kanban
design-doc: docs/superpowers/specs/2026-05-29-session-kanban-design.md
base-ref: none
archived-with: 2026-05-29-session-kanban
---

# Session JSON Kanban Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-file browser dashboard that renders exported opencode `session.json` as horizontal TODO task cards with preserved, collapsible traceability.

**Architecture:** `index.html` contains all CSS and JS. FileReader loads JSON, parser extracts todos/messages/artifacts, renderer builds horizontal cards. Details are progressively disclosed through nested `<details>` sections.

**Tech Stack:** Native HTML, CSS, JavaScript. No framework, no server, no external dependencies.

archived-with: 2026-05-29-session-kanban
---

### Task 1: Create Single-File App Shell

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create HTML structure**

Create `index.html` with:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Session Kanban</title>
  <style>
    /* styles added in later steps */
  </style>
</head>
<body>
  <main id="drop-zone" class="drop-zone">
    <div>
      <h1>Session Kanban</h1>
      <p>拖入 opencode 导出的 session.json</p>
    </div>
  </main>
  <main id="app" class="app hidden">
    <section id="info-bar"></section>
    <section id="board" class="board"></section>
  </main>
  <script>
    /* logic added in later steps */
  </script>
</body>
</html>
```

- [ ] **Step 2: Add theme and layout CSS**

Add CSS variables, drop zone, app layout, board horizontal scrolling, card layout, chat bubbles, artifacts, and traceability styles.

Important requirements:

- `board` uses horizontal flex row.
- Each `.task-card` has `min-width: 390px`, `max-width: 430px`, `height: calc(100vh - 128px)`.
- `.card-body` uses `overflow-y: auto`.
- User bubble is right-aligned and blue.
- AI bubble is left-aligned with green AI avatar.
- Completed/in-progress/pending cards show distinct borders, status badges, progress bars.

### Task 2: Implement File Loading and Validation

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add drag-and-drop listeners**

Implement:

```javascript
const dropZone = document.getElementById('drop-zone');

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', async (event) => {
  event.preventDefault();
  dropZone.classList.remove('drag-over');
  const file = event.dataTransfer.files[0];
  if (!file) return;
  await loadSessionFile(file);
});
```

- [ ] **Step 2: Add `loadSessionFile`**

Implement JSON read/parse and friendly error display.

Expected behavior:

- Non-JSON or invalid JSON shows an error in drop zone.
- Missing `messages` shows format-incompatible error.
- Valid JSON calls `parseSession(json)` then `renderApp(viewModel)`.

### Task 3: Implement Parser

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add `parseSession(json)`**

Return a view model:

```javascript
{
  session: json,
  todos: Todo[],
  cards: Card[]
}
```

- [ ] **Step 2: Add `extractTodos(messages)`**

Rules:

- Find all `part.type === 'tool' && part.tool === 'todowrite'`.
- Extract `part.state.input.todos`.
- Last complete snapshot wins.
- Sort completed → in_progress → pending.

- [ ] **Step 3: Add timeline builder**

Flatten messages into ordered events:

- user text
- assistant text
- reasoning
- tool
- patch

Preserve message/part IDs and timestamps where available.

- [ ] **Step 4: Add card grouping**

Map events to cards:

- Current card follows the latest TODO that becomes `in_progress`.
- If no current card, use the latest TODO with any status change.
- User messages before assistant work attach to the current or next active card.
- If no todos exist, fallback to one card per user turn.

### Task 4: Extract Final Results and Artifacts

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add final result extraction**

For each card:

- Final result is the last non-empty assistant text event.
- In-progress card label is “当前进展”.
- Completed card label is “最终成果”.
- Other assistant text becomes “AI 过程摘要”.

- [ ] **Step 2: Add artifact extraction**

Collect artifacts from:

- `message.info.summary.diffs[]`
- `part.type === 'patch'`
- `tool === 'write' || tool === 'edit'`

Each artifact has:

```javascript
{
  file,
  status,
  additions,
  deletions,
  patch
}
```

### Task 5: Render Session Info and Horizontal Cards

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Render Session Info Bar**

Show:

- title
- model
- duration
- token stats
- summary additions/deletions/files
- total progress bar (`completed / total`)

- [ ] **Step 2: Render card top area**

Each card top must include:

- status dot
- task title
- status badge
- thin progress bar

Progress values:

- completed: 100%
- in_progress: 40%
- pending: 0%

### Task 6: Render Card Body

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Render user input**

Default visible. Right-aligned blue bubble with `U` avatar.

- [ ] **Step 2: Render AI final result/current progress**

Default visible. Left-aligned AI bubble with green avatar and highlighted left border.

- [ ] **Step 3: Render artifacts**

Default visible under final result if artifacts exist.

Show file chips and “查看代码变更” nested detail if patch exists.

- [ ] **Step 4: Render AI process summary**

Default visible. Show non-final assistant text as concise process blocks.

- [ ] **Step 5: Render traceability details**

Folded or open via `<details>` containing:

- complete conversation
- reasoning
- tools
- subagents

Nested tool details show inputs/outputs or summaries.

### Task 7: Long Text and Safety Helpers

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add `escapeHtml`**

Escape `&`, `<`, `>`, `"`, `'` for all JSON-derived text.

- [ ] **Step 2: Add long-text clamp helper**

Messages longer than a threshold show truncated text plus `[展开]` / `[折叠]`.

- [ ] **Step 3: Add robust empty states**

Handle:

- no todos
- no final result
- no artifacts
- no tools
- missing optional fields

### Task 8: Manual Verification

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Open `index.html` in browser**

- [ ] **Step 2: Drag `/Users/laiyouxu/IdeaProjects/Yuxi-Know/session.json` into the page**

- [ ] **Step 3: Verify final design**

Checklist:

- Global info bar visible.
- Multiple TODO cards appear horizontally.
- Card top includes title, status, progress bar.
- Card content scrolls vertically.
- User input is visible and right-aligned.
- AI final result/current progress is visible.
- Artifacts are visible when files exist.
- AI process summary remains visible.
- Full conversation/reasoning/tools/subagents are traceable via folds.
- Long text can expand/collapse.
- Missing fields do not crash.
