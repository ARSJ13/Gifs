<template>
  <div>
    <h2 class="title" v-if="totalSearchGif.length !== 0 || gif.length !== 0" center>Resultado da pesquisa!</h2>
    <div class="main-content" >
      <div
        class="cards-container"
        v-for="(search, id) in totalSearchGif.length > 0 ? totalSearchGif : gif "
        :key="id"
      >
        <gif-card :selected="search" :btnDelete="false"></gif-card>
      </div>
    </div>
    <div v-if="totalSearchGif.length !== 0 || gif.length !== 0" class="button-search">
      <sui-button @mouseenter.stop="updatePagination" @click="updatePagination" fluid content="Mais resultados ..." />
    </div>
    <div v-if="totalSearchGif.length !== 0 || gif.length !== 0" class="divider-container">
      <div is="sui-divider" horizontal>
        <sui-icon name="asterisk" loading />
      </div>
    </div>
    <h2 class="title" center>Gif´s mais buscadas!</h2>
    <div class="main-content">
      <div
        class="cards-container"
        v-for="(gif, index) in gifs"
        :key="index"
      >
        <gif-card :selected="gif" :btnDelete="false"></gif-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GifCard from './GifCard.vue'

export default {
  name: 'Home',
  components: {
    GifCard
  },
  computed: {
    ...mapState({
      gifs: state => state.gifs,
      gif:  state => state.gif,
      word: state => state.word,
      totalSearchGif: state => state.totalSearchGif
    })
  },
  data() {
    return {
      totalSearch: [],
      selectedGif: '',
      myList: []
    }
  },
  mounted() {
    this.totalSearch = this.totalSearchGif
  },
  updated() {
    if (this.totalSearchGif.length === 0) {
      this.totalSearch = []  
    }
    if (this.totalSearchGif.length === 50) {
      this.totalSearch = this.totalSearchGif  
    }
  },
  methods: {
    totalGifs() {
      const gif = this.gif
      
      if(gif.length > 0) {
        this.totalSearch.push(...gif)
        this.$store.commit('TOTAL_SEARCH', this.totalSearch)
      }
    },
    updatePagination() {
      const currentPage = this.$store.getters.currentPage
      const info = {
        page: currentPage,
        search: this.word
      }
      this.$store.dispatch('pagination', info)
      this.totalGifs()
    }
  }
}
</script>

<style scoped>
  .title {
    color: #fff;
    font-weight: bold;
    background: #000;
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
  }
  .button-search {
    margin-top: 3rem;
  }
  .divider-container {
    margin: 4rem 0;
  }

  @media screen and (max-width: 1000px) {
    .main-content {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
</style>
