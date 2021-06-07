import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL, API_KEY } from '../config/api.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    gifs: '',
    gif: ''
  },
  getters: {
    stateGifs (state) {
      return state.gifs
    }
  },
  mutations: {
    UPDATE_GIFS (state, payload) {
      state.gifs = payload
    },
    SEARCH_GIF (state, payload) {
      state.gif = payload
    }
  },
  actions: {
    listGifs ({commit}) {
      fetch(`${BASE_URL}/trending?api_key=${API_KEY}`)
        .then(response => response.json())
        .then( r => {
          commit('UPDATE_GIFS', r.data)
        })
    },
    searchGif ({commit}, info) {
      fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${info}&rating=pg`)
        .then(response => response.json())
        .then( r => {
          console.log(r)
          commit('SEARCH_GIF', r.data)
        })
    }
  }
})
