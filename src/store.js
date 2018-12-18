import Vue from 'vue'
import Vuex from 'vuex'
import { API } from './utils/api'

Vue.use(Vuex)

function getHeaders(token) {
  return { Authorization: `Bearer ${token}` }
}

const API_VERSION = 'v1'

export default new Vuex.Store({
  state: {
    user: {},
    todoLists: [],
    todoList: {},
    token: localStorage.getItem('token') || ''
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {
    LOGIN(state, token) {
      state.token = token
    },
    LOGOUT(state) {
      state.user = {}
      state.token = ''
    },
    REGISTER(state, token) {
      state.token = token
    },
    GET_USER(state, user) {
      state.user = user
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
      const { data } = await API.post(`/api/${API_VERSION}/login`, {
        email: payload.email,
        password: payload.password
      })
      localStorage.setItem('token', data.token)
      commit('LOGIN', data.token)
    },
    async logout({ commit }) {
      localStorage.removeItem('token')
      commit('LOGOUT')
    },
    async register({ commit }, payload) {
      const { data } = await API.post(`/api/${API_VERSION}/register`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password
      })
      localStorage.setItem('token', data.token)
      commit('REGISTER', data.token)
    },
    async getUser({ state, commit }) {
      const { data } = await API.get(`/api/${API_VERSION}/me`, {
        headers: getHeaders(state.token)
      })
      commit('GET_USER', data)
    },
    async getTodoLists({ state, commit }) {
      const { data } = await API.get(`/api/${API_VERSION}/todo-lists`, {
        headers: getHeaders(state.token)
      })
      commit('GET_TODO_LISTS', data)
    },
    async getTodoList({ state, commit }, id) {
      const { data } = await API.get(`/api/${API_VERSION}/todo-lists/${id}`, {
        headers: getHeaders(state.token)
      })
      commit('GET_TODO_LIST', data)
    }
  }
})
