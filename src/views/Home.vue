<template>
  <main class="main-container">
    <div class="menu">
      <Menu />
    </div>
    <div class="dart-content">
      <transition mode="in-out" appear>
        <sui-image class="dart-vader"  v-if="dartVader" src="https://media1.giphy.com/media/26FL0ydLDEcARWY0g/giphy.gif?cid=d7431941ow0hwy8auw0zw86ekg4d3gw6kuz7iw8u1fdg7e59&rid=giphy.gif&ct=g" size='medium' centered avatar/>
      </transition>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
  import Menu from '../components/Menu.vue'
  export default {
    name: 'Home',
    components: {
      Menu
    },
    data() {
      return {
        dartVader: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.dartVader = true
      },3000)
    }
  }

</script>

<style scoped>
  
  .main-container {
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }
  .menu{
    position: fixed;
    top: 2%;
    right: 2%;
    z-index: 1;
  }
  .dart-content {
    display: flex;
    height: 440px;
    width: 80%;
    padding: 5rem;
    margin: 2rem auto;
    background: url('../assets/fire.gif') no-repeat 100% center;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  }
  @keyframes appear {
    from {width: 0px; height: 0%;}
    to {width: 300px; height: 100%;}
  }
  .dart-vader {
    animation-name: appear;
    animation-duration: 4000ms;
  }

  @media screen and (max-width: 1000px) {
    .main-container {
      width: 100%;
    }
  }
</style>
