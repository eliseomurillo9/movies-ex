import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [{
      id: 1,
      title : 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating : 9.3,
      poster : '/img/the-shawshank.jpg',
    },
    {
      id: 2, 
      title : 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
      rating : 9.2,
      poster : '/img/the-godfather.jpg',
    },
    {
      id: 3,
      title : 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      rating : 9.0,
      poster : '/img/the-dark-night.jpg',
    },
    {
      id: 4,
      title : 'The Godfather II',
      description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      rating : 9.0,
      poster : '/img/the-godfather-2.jpg',
    },
  ]
  },
  getters: {
    movies(state){
      return state.movies
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
