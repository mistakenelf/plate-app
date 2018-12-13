import Vue from 'vue'
import Vuex from 'vuex'
import { API } from './utils/api'

Vue.use(Vuex)

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`
}

export default new Vuex.Store({
  state: {
    todoLists: [],
    todoList: {},
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    LOGIN(state, token) {
      state.token = token
    },
    GET_TODO_LISTS(state, todoLists) {
      state.todoLists = todoLists
    },
    GET_TODO_LIST(state, todoList) {
      state.todoList = todoList
    }
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await API.post('/api/login', {
        email: payload.email,
        password: payload.password
      })
      localStorage.setItem('token', data.token)
      commit('LOGIN', data.token)
    },
    async getTodoLists({ commit }) {
      const { data } = await API.get('/api/todo-lists', { headers })
      commit('GET_TODO_LISTS', data)
    },
    async getTodoList({ commit }, id) {
      const { data } = await API.get(`/api/todo-lists/${id}`, { headers })
      commit('GET_TODO_LIST', data)
    }
  }
})
