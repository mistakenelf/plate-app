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
  faPlus,
  faTachometerAlt,
  faUserCircle,
  faArrowLeft,
  faSignOutAlt,
  faNewspaper,
  faCalendarCheck,
  faBell,
  faClipboardList,
  faTimes,
  faSpinner,
  faExclamationTriangle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faPlus,
  faTachometerAlt,
  faUserCircle,
  faArrowLeft,
  faSignOutAlt,
  faNewspaper,
  faCalendarCheck,
  faBell,
  faClipboardList,
  faTimes,
  faSpinner,
  faExclamationTriangle,
  faCheckCircle
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
