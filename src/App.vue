<template>
  <div id="app">
    <search-gif></search-gif>
    <router-view/>
  </div>
</template>

<script>
import searchGif from './components/search-gif.vue'
export default {
  name: 'App',
  components: {
    searchGif
  },
  created () {
    this.$store.dispatch('listGifs')
  }
}
</script>

<style>
  @import "./assets/geral.css";
  #app {
    background: orange repeat;
    width: 100vw;
    padding-bottom: 5rem;
  }
</style>
