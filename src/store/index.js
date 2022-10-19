import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    films: []
  },
  getters: {
  
    films(state) {
      return state.films
    }

  },
  mutations: {
    filmList(state,films) {
      state.films = films;
    }
  },
  actions: {
    filmList({ commit }, films) {
      commit('filmList', films);
    }
  },
})
