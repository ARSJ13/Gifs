<template>
  <main class="main-container">
    <div class="dart-content">
      <sui-image src="https://media1.giphy.com/media/26FL0ydLDEcARWY0g/giphy.gif?cid=d7431941ow0hwy8auw0zw86ekg4d3gw6kuz7iw8u1fdg7e59&rid=giphy.gif&ct=g" size='medium' centered avatar/>
    </div>
    <div class="main-content" >
      <div @blur="toggle=false" @click="showModal" class="cards-container" v-for="search in gif">
        <gif-card
          :title="search.title"
          :url="search.images.original.url"
          :avatar="search.user ? search.user.banner_image : ''"
          :username="search.username ? search.username : 'Noops!'"
        ></gif-card>
      </div>
      <div @blur="toggle=false" @click="showModal" class="cards-container" v-for="(gif, index) in gifs" :key="index">
        <gif-card
          :title="gif.title"
          :url="gif.images.original.url"
          :avatar="gif.user ? gif.user.banner_image : ''"
          :username="gif.username ? gif.username : 'Noops!'"
        ></gif-card>
      </div>
    </div>
    <div>
      <modal :open="toggle"></modal>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import gifCard from '../components/gif-card.vue'
import modal from '../components/modal.vue'

export default {
  name: 'Home',
  components: {
    gifCard,
    modal
  },
  computed: {
    ...mapState({
      gifs: state => state.gifs,
      gif:  state => state.gif
    })
  },
  data() {
    return {
      toggle: false
    }
  },
  methods: {
    showModal() {
      console.log('clicou!')
      this.toggle = !this.toggle
    }
  }
}
</script>

<style scoped>
  .main-container {
    width: 1000px;
    margin: 0 auto;
  }
  .dart-content {
    display: flex;
    width: 80%;
    padding: 5rem;
    margin: 2rem auto;
    background: url('../assets/fire.gif') no-repeat 100% center;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  }
  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
  }
  @media screen and (max-width: 1000px) {
    .main-container {
      width: 100%;
    }
    .main-content {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
</style>
