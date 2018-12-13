import Vue from 'vue'
import Vuex from 'vuex'
import { API } from './utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: [],
    todoList: {},
    token: ''
  },
  mutations: {
    LOGIN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
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
      commit('LOGIN', data.token)
    },
    async getTodoLists({ commit }) {
      const { data } = await API.get('/api/todo-lists')
      commit('GET_TODO_LISTS', data)
    },
    async getTodoList({ commit }, id) {
      const { data } = await API.get(`/api/todo-lists/${id}`)
      commit('GET_TODO_LIST', data)
    }
  }
})
