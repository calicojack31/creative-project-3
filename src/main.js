import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'
import mockFighters from './mock-fighters.js'
import mockStages from './mock-stages.js'

//import 'bootstrap'
//might end up not using it
import 'bootstrap/dist/css/bootstrap.min.css'

let data = {
  products: mock,
  fighters: mockFighters,
  stages: mockStages,

  combatants: [],

  //USE THIS
  stageSelection: "",
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')