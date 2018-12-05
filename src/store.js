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
    },
    GET_TODO_LISTS(state, todoLists) {
      state.todoLists = todoLists
    },
    GET_TODO_LIST(state, todoList) {
      state.todoList = todoList
    }
  },
  actions: {
    login({ commit }, payload) {
      API.post('/api/login', {
        email: payload.email,
        password: payload.password
      })
        .then(r => r.data)
        .then(token => {
          commit('LOGIN', token)
        })
    },
    getTodoLists({ commit }) {
      API.get('/api/todo-lists')
        .then(r => r.data)
        .then(todoLists => {
          commit('GET_TODO_LISTS', todoLists)
        })
    },
    getTodoList({ commit }, id) {
      API.get(`/api/todo-lists/${id}`)
        .then(res => res.data)
        .then(todoList => {
          commit('GET_TODO_LIST', todoList)
        })
    }
  }
})
