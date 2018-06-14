// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './utils/setRem'
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

// Axios.defaults.baseURL = '//fullnews.lyl1.com:8089/sports/list'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
