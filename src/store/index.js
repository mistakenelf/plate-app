import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import theme from './modules/theme'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    theme
  },
  strict: debug
})
