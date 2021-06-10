import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL, API_KEY } from '../config/api.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    gifs: '',
    gif: '',
    totalSearchGif: '',
    word: '',
    page: 0,
    totalPage: ''
  },
  getters: {
    stateGifs (state) {
      return state.gifs
    },
    searchGifs (state) {
      return state.gif
    },
    currentPage (state) {
      return state.page
    }
  },
  mutations: {
    SEARCH_GIF (state, payload) {
      state.gif = payload
    },
    UPDATE_GIFS (state, payload) {
      state.gifs = payload
    },
    UPDATE_PAGE (state, payload) {
      state.page = payload
    },
    UPDATE_WORD (state, payload) {
      state.word = payload
    },
    TOTAL_SEARCH (state, payload) {
      state.totalSearchGif = payload
    },
    TOTAL_PAGE (state, payload) {
      state.totalPage = payload
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
    searchGif ({commit, state}, info) {
      commit('UPDATE_WORD', info)
      fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${info}&rating=pg&offset=${state.page}`)
        .then(response => response.json())
        .then( r => {
          commit('TOTAL_PAGE', r.pagination.total_count)
          commit('SEARCH_GIF', r.data )
          if (r.pagination.offset === 0) {
            commit('TOTAL_SEARCH', r.data)
          }
        })
    },
    pagination ({dispatch, commit}, info) {
      const currentPage = info.page + 50 
      commit('UPDATE_PAGE', currentPage)
      dispatch('searchGif', info.search)
    }
  }
})
