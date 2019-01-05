import './registerServiceWorker'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import './plugins/fontAwesome'
import './plugins/veeValidate'
import './plugins/vueFlags'
import { i18n } from './plugins/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
