import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GifStandart from '../components/GifStandart.vue'
import Lista from '../components/Lista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'GifStandart',
        component: GifStandart
      },
      {
        path: '/list',
        name: 'Lista',
        component: Lista
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
