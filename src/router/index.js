import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fighters from '../views/Fighters.vue'
import Stages from '../views/Stages.vue'
import Smash from '../views/Smash.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/smash',
    name: 'Smash',
    component: Smash
  },
  {
    path: '/stages',
    name: 'Stages',
    component: Stages
  },
  {
    path: '/fighters',
    name: 'Fighters',
    component: Fighters
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router