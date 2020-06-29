import state from './state'

export default {
  increment(state: any) {
    state.counter--
  },
  addToList: function(state: any, { text }) {
    var tempText = { text }
    state.sugestions.push(tempText.text)
  },
  addBooks: function(
    state: any,
    { id, author, title, publisher, city, year, category }
  ) {
    var tempText = { id, author, title, publisher, city, year, category }
    console.log('mutant: ' + tempText)
    state.books.push(tempText)
  }
}
