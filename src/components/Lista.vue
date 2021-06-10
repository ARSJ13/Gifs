<template>
  <div>
    <h2 class="title" center>Minha lista</h2>
    <div v-if="!lista || lista.length === 0" center is="sui-divider" horizontal>
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
import { mapState } from 'vuex'
import GifCard from './GifCard.vue'
export default {
  name: 'Lista',
  components: {
    GifCard
  },
  computed: {
    ...mapState({
      lista: state => state.list
    })
  },
  created() {
    this.updateLista()
  },
  methods: {
    updateLista() {
      const listStorage = localStorage.getItem('list')
      const listJson = JSON.parse(listStorage)
      this.$store.commit('UPDATE_LIST', listJson)
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