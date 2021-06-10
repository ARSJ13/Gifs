<template>
  <div id="app">
    <search-gif></search-gif>
    <router-view/>
  </div>
</template>

<script>
import SearchGif from './components/SearchGif.vue'
export default {
  name: 'App',
  components: {
    SearchGif
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
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all 1000ms;
  }
</style>
