import state from './state'

export default {
  increment(state) {
    state.counter--
  },
  addToList(state, { text }) {
    var tempText = { text }
    state.sugestions.push(tempText.text)
  }
}
