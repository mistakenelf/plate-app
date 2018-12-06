import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import {
  faTachometerAlt,
  faCheckCircle,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import './registerServiceWorker'

library.add(faTachometerAlt, faCheckCircle, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
