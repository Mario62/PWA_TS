import axios from 'axios'

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
    const { body } = await axios
      .get('api/v1/2.20.min.json')
      // .get('api/v1/06.2020.json')
      .then((response) => response.json())
    // .catch(error) { console.warn(error)
    // }

    commit('SET_ANNOUNCEMENT', body)

    //// Working example
    // const { body } = await fetch(
    //   'https://jsonplaceholder.typicode.com/posts/1'
    // ).then((response) => response.json())
    // console.warn(body)
    // commit('SET_ANNOUNCEMENT', body)
  }
}
