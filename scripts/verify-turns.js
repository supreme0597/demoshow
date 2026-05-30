const fs = require('fs')
const vm = require('vm')

const html = fs.readFileSync('index.html', 'utf8')
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('\n')
const sandbox = {
  console,
  localStorage: { getItem() { return null }, setItem() {}, removeItem() {} },
  window: { addEventListener() {} },
  document: {
    getElementById() {
      return { addEventListener() {}, classList: { add() {}, remove() {} }, innerHTML: '', textContent: '' }
    },
    addEventListener() {},
  },
}

vm.createContext(sandbox)
vm.runInContext(script.replace("document.addEventListener('DOMContentLoaded', restoreCachedSession);", ''), sandbox)

const session = JSON.parse(fs.readFileSync('/Users/laiyouxu/IdeaProjects/Yuxi-Know/session.json', 'utf8'))
const viewModel = sandbox.parseSession(session)

if (!viewModel.cards.length) throw new Error('expected cards')
if (!viewModel.cards.every((card) => Array.isArray(card.turns))) throw new Error('expected every card to expose turns[]')

const first = viewModel.cards[0]
if (!first.turns.length) throw new Error('expected first card to have at least one turn')
if (!first.turns[0].userMessages.length) throw new Error('expected first turn to keep user input')
if (viewModel.cards.some((card) => card.todo.status === 'pending' && card.turns.length)) throw new Error('pending cards should not receive turns')

console.log('Turn grouping OK:', viewModel.cards.map((card) => ({ todo: card.todo.content, turns: card.turns.length })))
