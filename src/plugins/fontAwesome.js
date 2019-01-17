import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faPlus,
  faUserCircle,
  faArrowLeft,
  faSignOutAlt,
  faTimes,
  faSpinner,
  faMoon,
  faChartLine,
  faTasks
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faPlus,
  faUserCircle,
  faArrowLeft,
  faSignOutAlt,
  faTimes,
  faSpinner,
  faMoon,
  faChartLine,
  faTasks
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
