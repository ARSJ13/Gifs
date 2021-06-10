<template>
  <header class="header-container">
    <div class="title-header">
      <sui-label
        attached='top'
        size='massive'
        color='black'
        center
      >Quem será capaz de destruir <span>DART VADER</span></sui-label>
    </div>
    <div class="search-input">
      <sui-input
        placeholder="Pesquisar..."
        size='huge'
        icon="search"
        v-model="info"
        @keyup="searchGif"
        @focus="updateState"
      />
    </div>
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
    },
    updateState() {
      this.$store.commit('TOTAL_SEARCH', '')
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
    padding: 2rem;
  }
  .search-input{
    position: absolute;
    top: 2%;
    z-index: 1;
  }
  @media screen and (max-width: 1100px) {
    .title-header {
      display: none;
    }
  }
</style>