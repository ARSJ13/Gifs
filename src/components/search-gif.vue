<template>
  <header class="header-container">
    <sui-label
      attached='top'
      size='massive'
      color='black'
      center
    >Quem será capaz de destruir <span>DART VADER</span></sui-label>
    <sui-input
      placeholder="Pesquisar..."
      size='huge'
      icon="search"
      v-model="info"
      @keydown="searchGif"
    />
  </header>
</template>

<script>
export default {
  name: 'searchGif',
  data() {
    return {
      info: ''
    }
  },
  methods: {
    searchGif() {
      this.$store.dispatch('searchGif', this.info)
    }
  }
}
</script>

<style scoped>
  span{
    color: red;
  }
  header.header-container {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.015);
    margin-bottom: 2rem;
    padding-left: 2rem;
  }
</style>