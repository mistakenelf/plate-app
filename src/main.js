import './registerServiceWorker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import {
  faList,
  faCalendar,
  faStickyNote,
  faTachometerAlt,
  faClipboard,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faList,
  faCalendar,
  faStickyNote,
  faTachometerAlt,
  faClipboard,
  faPlus
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
