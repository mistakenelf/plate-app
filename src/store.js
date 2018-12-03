import Vue from 'vue'
import Vuex from 'vuex'
import { API } from './utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: []
  },
  mutations: {
    SET_TODO_LISTS(state, todoLists) {
      state.todoLists = todoLists
    }
  },
  actions: {
    loadTodoLists({ commit }) {
      API.get('/api/todos')
        .then(r => r.data)
        .then(todoLists => {
          commit('SET_TODO_LISTS', todoLists)
        })
    }
  }
})
