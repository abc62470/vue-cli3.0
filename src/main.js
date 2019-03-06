import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import MintUI from 'mint-ui'
import axios from './http'
import 'mint-ui/lib/style.css'
import './config/rem'

Vue.use(MintUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
