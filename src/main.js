import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.config.productionTip = false
Vue.use(vueAwesomeCountdown, 'vac')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
