export const state = () => ({
  announcement: null
})

export const mutations = {
  SET_ANNOUNCEMENT(state, message) {
    state.announcement = message
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { body } = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    ).then((response) => response.json())
    commit('SET_ANNOUNCEMENT', body)
  }
}
