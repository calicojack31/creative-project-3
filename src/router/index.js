import Vue from 'vue'
import VueRouter from 'vue-router'
import NewHome from '../views/NewHome.vue'
//import Browse from '../views/Browse.vue'
//import Cart from '../views/Cart.vue'
import Fighters from '../views/Fighters.vue'
import Stages from '../views/Stages.vue'
import Smash from '../views/Smash.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'NewHome',
    component: NewHome
  },
  //  {
  //  path: '/browse',
  //  name: 'Browse',
  //  component: Browse
  //},
  //{
  //  path: '/cart',
  //  name: 'Cart',
  //  component: Cart
  //},
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