// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueFire from 'vuefire'
import jQuery from 'jquery'

Vue.use(VueFire)

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.config.productionTip = false
window.$ = jQuery

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
