<template>
  <div>
    <div @click="showModal" class="card-container">
      <sui-image :src="selected.images.original.url" size='medium' fluid centered/>
    </div>
    <modal :open="toggle" :gif="selected" :buttonDelete="btnDelete" @updateList='eventModal'></modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'gif-card',
  components: {
    Modal
  },
  props: ['selected', 'btnDelete'],
  data() {
    return {
       toggle: false,
    }
  },
  methods: {
    showModal() {
      this.toggle = !this.toggle
      console.log(this.toggle)
    },
    eventModal(e) {
      this.toggle = e.modal
    }
  }
}
</script>

<style scoped>
  .card-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    cursor: pointer;
  }
</style>