export const state = () => ({
  counter: 0,
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

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     posts: [],
//     loading: true
//   },
//   actions: {
//     loadData({ commit }) {
//       axios.get(URL).then((response) => {
//         // console.log(response.data, this)
//         commit('updatePosts', response.data)
//         commit('changeLoadingState', false)
//       })
//     }
//   },
//   mutations: {
//     updatePosts(state, posts) {
//       state.posts = posts
//     },
//     changeLoadingState(state, loading) {
//       state.loading = loading
//     },
//     increment(state) {
//       state.count++
//     }
//   }
// })
// // export const state = () => ({
// //   counter: 0
// // })

// // export const mutations = {
// //   increment(state) {
// //     state.counter++
// //   }
// // }

// // export const geters = {}
