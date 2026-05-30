const fs = require('fs')
const vm = require('vm')

function loadParser() {
  const html = fs.readFileSync('index.html', 'utf8')
  const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .join('\n')
    .replace("document.addEventListener('DOMContentLoaded', restoreCachedSession);", '')

  const sandbox = {
    console,
    localStorage: { getItem() { return null }, setItem() {}, removeItem() {} },
    window: { addEventListener() {} },
    document: {
      getElementById() {
        return {
          addEventListener() {},
          classList: { add() {}, remove() {}, toggle() {} },
          innerHTML: '',
          textContent: '',
        }
      },
      addEventListener() {},
      querySelectorAll() { return [] },
    },
  }

  vm.createContext(sandbox)
  vm.runInContext(script, sandbox)
  return sandbox.parseSession
}

function createPlanningSessionWithPatch() {
  return {
    info: {
      title: 'Grouping regression',
      time: { created: 1, updated: 2 },
    },
    messages: [
      {
        id: 'msg_user_1',
        info: { id: 'msg_user_1', role: 'user', time: { created: 1 } },
        parts: [{ type: 'text', text: '第一次用户输入：请分析并列出 todo。' }],
      },
      {
        id: 'msg_assistant_1',
        parentID: 'msg_user_1',
        info: {
          id: 'msg_assistant_1',
          parentID: 'msg_user_1',
          role: 'assistant',
          time: { created: 2 },
        },
        parts: [
          { type: 'step-start' },
          { type: 'reasoning', text: 'I have enough context to write todos.' },
          {
            type: 'tool',
            tool: 'todowrite',
            state: {
              input: {
                todos: [
                  { content: '修复 index.html 分组算法', status: 'completed', priority: 'high' },
                  { content: '补充分组回归验证', status: 'pending', priority: 'medium' },
                ],
              },
            },
          },
          { type: 'step-finish' },
          {
            type: 'patch',
            files: ['/tmp/opencode-kanban/index.html'],
          },
        ],
      },
    ],
  }
}

function countUsers(card) {
  return card.turns.reduce((total, turn) => total + turn.userMessages.length, 0)
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const parseSession = loadParser()
const viewModel = parseSession(createPlanningSessionWithPatch())
const [initCard, firstTaskCard] = viewModel.cards

assert(initCard, 'expected an initialization card')
assert(initCard.index === -1, 'expected first card to be the initialization card')
assert(countUsers(initCard) === 1, 'expected initial user input to stay on the initialization card')
assert(countUsers(firstTaskCard) === 0, 'expected first real task card not to absorb the initial user input')
assert(
  firstTaskCard.rawArtifacts.some((event) => event.artifact?.file.endsWith('index.html')),
  'expected same-message patch to remain attached to the real task card'
)

console.log('Grouping regression OK')
