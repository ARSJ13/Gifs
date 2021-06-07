<template>
  <div class="card-container">
    <sui-card color>
      <sui-card-content>
        <h4 class="title-content">{{ title }}</h4>
        <sui-image :src="url" size='medium' centered bordered/>
      </sui-card-content>
      <sui-card-content extra>
        <sui-grid v-if="avatar||username" :columns="2">
          <sui-grid-row stretched>
            <sui-grid-column>
              Creator:
            </sui-grid-column>
            <sui-grid-column textAlign='center'>
              <div>
                <sui-image
                  v-if="avatar"
                  :src="avatar"
                  shape="circular"
                  size="tiny"
                />
                <sui-icon v-else name="user" inverted circular />
              </div>
              <sui-card-meta>{{ username }}</sui-card-meta>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'gif-card',
  props: ['title', 'url', 'avatar', 'username'],
}
</script>

<style scoped>
  .card-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-content {
    height: 50px;
    margin: 0px;
    padding: 0.5rem;
  }
</style>