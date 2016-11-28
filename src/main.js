// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
// import style file
import 'assets/styles/typo.css'
import 'assets/styles/animate.scss'
import 'assets/styles/grid.scss'
/* eslint-disable no-new */

import { proxyserver } from 'src/common/api'

Vue.mixin({
  data () {
    return {
      proxyserver: proxyserver
    }
  }
})

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
