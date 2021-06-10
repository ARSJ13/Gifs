<template>
  <div>
    <sui-modal v-model="open">
      <sui-modal-header>{{ gif.title }}</sui-modal-header>
      <sui-modal-content image>
        <sui-image
          wrapped
          size="small"
          :src="gif.images.original.url"
        />
        <sui-modal-description>
          <sui-header> Criador <span>{{ gif.user ? gif.user.display_name : 'Nops!' }}</span></sui-header>
          <div v-if="gif.user">
            <p> Website <a :href="gif.user.website_url" target="_blank">{{ gif.user.website_url }}</a></p>
          </div>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button v-if="buttonDelete" negative @click.native="deleteGif()">
          Remover
        </sui-button>
        <sui-button positive @click.native="addGif()">
          Adicionar
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import LocalStorage from '../utils/LocalStorage'
export default {
  name: 'Modal',
  props: ['open', 'gif', 'buttonDelete'],
  created() {
    this.localStorage = new LocalStorage(this.gif)
  },
  methods: {
    addGif() {
      this.localStorage.add('list')
      this.$emit('updateList',{modal: false})
    },
    deleteGif() {
      this.localStorage.delete('list')
      this.$emit('updateList',{modal: false})
    }
  }
}
</script>

<style scoped>
  span {
    color: chocolate;
  }
</style>