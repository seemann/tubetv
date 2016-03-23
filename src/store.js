import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [],
    detail: []
  },

  actions: {
    search: 'SEARCH',
    detail: 'DETAIL'
  },

  mutations: {
    SEARCH (state, searchQuery) {
      Vue.http.get(`search?type=movie,show&query=${searchQuery}`)
      .then(function (response) {
        state.results = response.data
      },
      function (response) {
        console.log()
      })
    },
    DETAIL (state, detail) {
      state.detail = detail
    }
  }
})
