<template>
  <div>
    <h2 class="title" center>Minha lista</h2>
    <div v-if="!lista" center is="sui-divider" horizontal>
      <h4 is="sui-header">
        <i class="close icon"></i>
        Nenhuma gif selecionada.
      </h4>
    </div>
    <div class="main-content" >
      <div
        @blur="toggle=false"
        class="cards-container"
        v-for="(item, id) in lista"
        :key="id"
      >
        <gif-card :selected="item" :btnDelete="true"></gif-card>
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from './GifCard.vue'
export default {
  name: 'Lista',
  components: {
    GifCard
  },
  data() {
    return {
      lista: [],
    }
  },
  created() {
    this.updateLista()
    console.log(this.lista)
  },
  updated() {
    this.updateLista()
  },
  methods: {
    updateLista() {
      const listStorage = localStorage.getItem('list')
      const listJson = JSON.parse(listStorage)
      this.lista = listJson
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
</style>