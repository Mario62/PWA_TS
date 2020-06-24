export const state = () => ({
    counter: 45,
    podpowiedzi: [
      { author: "Adam Mickiewicz", title: "Dziady" },
      { author: "Adam Asnyk", title: "Dziady" }
    ],  
    all: '',
    books: [
      {
        id: '333',
        title: 'Potop',
        author: 'Prus'
      }
    ]
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }