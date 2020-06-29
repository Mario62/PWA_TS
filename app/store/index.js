import axios from 'axios'

export const state = () => ({
  announcement: null
})

export const mutations = {
  SET_ANNOUNCEMENT(state, message) {
    state.announcement = message

    console.log(454)
    console.warn(state.announcement)
    console.log(454)
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    //TODO
    // const { body } = axios
    // .get('https://jsonplaceholder.typicode.com/posts')
    // .get('http://127.0.0.1:3000/api/v1/4.json')
    // .then((response) => response.json())
    // .catch(error) { console.warn(error)
    // }
    // var body = await [
    //   {
    //     id: '14356',
    //     author: 'Vetulani, Jerzy (1936-2017).',
    //     title: 'Ćwiczenia duszy, rozciąganie mózgu',
    //     publisher: 'Społeczny Instytut Wydawniczy ',
    //     city: 'Kraków',
    //     year: '2016',
    //     category: 'religie'
    //   },
    //   {
    //     id: '14366',
    //     author: 'Lunde, Maja (1975- ).',
    //     title: 'Historia pszczół',
    //     publisher: 'Wydawnictwo Literackie',
    //     city: 'Kraków',
    //     year: '2017',
    //     category: 'beletrystyka'
    //   },
    //   {
    //     id: '14367',
    //     author: 'Gumundur Andri Thorsson (1957- ).',
    //     title: 'Miasteczko w Islandii',
    //     publisher: 'Wielka Litera',
    //     city: 'Warszawa',
    //     year: 'copyright ',
    //     category: 'beletrystyka'
    //   }
    // ]
    // console.warn(typeof(body())
    // commit('SET_ANNOUNCEMENT', body)
    //// Working example
    // const { body } = await fetch(
    //   'https://jsonplaceholder.typicode.com/posts/1'
    // ).then((response) => response.json())
    // console.warn(body)
    // commit('SET_ANNOUNCEMENT', body)
  }
}
