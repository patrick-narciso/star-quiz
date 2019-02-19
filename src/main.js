import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters/charImage'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.config.productionTip = false
Vue.use(vueAwesomeCountdown, 'vac')
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
