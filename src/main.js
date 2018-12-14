import './registerServiceWorker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import Vue from 'vue'
import {
  faBars,
  faCheckCircle,
  faPlus,
  faTachometerAlt,
  faUserCircle,
  faCogs,
  faArrowLeft,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faCheckCircle,
  faPlus,
  faTachometerAlt,
  faUserCircle,
  faCogs,
  faArrowLeft,
  faSignOutAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
