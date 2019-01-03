import './registerServiceWorker'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import './plugins/fontAwesome'
import './plugins/veeValidate'
import { i18n } from './plugins/i18n'

Vue.config.productionTip = false

if (localStorage.getItem('theme') === 'dark') {
  document.body.style.color = '#ffffff'
  document.body.style.background = '#3d4852'
} else {
  document.body.style.color = '#444'
  document.body.style.background = '#dae1e7'
}

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
