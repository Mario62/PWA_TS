import state from './state'

export default {
  increment(state: any) {
    state.counter--
  },
  addToList: function(state: any, { text }) {
    var tempText = { text }
    state.sugestions.push(tempText.text)
  }
}
