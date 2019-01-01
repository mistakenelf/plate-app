import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../modules/auth/_store'
import todos from '../modules/todos/_store'
import dashboard from '../modules/dashboard/_store'
import theme from '../modules/theme/_store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    dashboard,
    todos,
    theme
  },
  strict: debug
})
