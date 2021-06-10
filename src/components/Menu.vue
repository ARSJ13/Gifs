<template>
  <div class="menu-container">
    <sui-button
      v-if="!toggleButton"
      icon="hand peace outline"
      label-position="left"
      content="Sua lista"
      inverted
      @click="viewList"
    />
    <sui-button
      v-else
      icon="bars"
      label-position="left"
      content='Home'
      inverted
      color="red"
      @click="viewList"
    />
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      toggleButton: false
    }
  },
  methods: {
    viewList() {
      if (this.$router.history.current.path === '/') {
        this.$router.push({path: '/list'})
        this.toggleButton = true
      } else {
        this.$router.push({path: '/'})
        this.toggleButton = false 
      }
    }
  }
}
</script>
