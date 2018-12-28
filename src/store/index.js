import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import todoList from './modules/todoList'
import dashboard from './modules/dashboard'
import todos from './modules/todos'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    dashboard,
    todoList,
    todos
  },
  strict: debug
})
