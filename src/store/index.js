import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import todos from './modules/todos'
import dashboard from './modules/dashboard'
import translation from './modules/translation'
import theme from './modules/theme'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    dashboard,
    todos,
    theme,
    translation
  },
  strict: debug
})
