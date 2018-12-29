import { API, getHeaders } from '../../helpers/api'
import { API_VERSION } from '../../helpers/constants'

const state = {
  user: {},
  token: localStorage.getItem('token') || ''
}

const getters = {
  isLoggedIn: state => !!state.token,
  currentUesr: state => state.user
}

const mutations = {
  LOGIN_SUCCESS(state, token) {
    state.token = token
  },
  LOGOUT_SUCCESS(state) {
    state.user = {}
    state.token = ''
  },
  REGISTER_SUCCESS(state, token) {
    state.token = token
  },
  GET_USER_SUCCESS(state, user) {
    state.user = user
  }
}

const actions = {
  async login({ commit }, payload) {
    const { data } = await API.post(`/api/${API_VERSION}/login`, {
      email: payload.email,
      password: payload.password
    })
    localStorage.setItem('token', data.token)
    commit('LOGIN_SUCCESS', data.token)
  },

  async logout({ commit }) {
    localStorage.removeItem('token')
    commit('LOGOUT_SUCCESS')
  },

  async register({ commit }, payload) {
    const { data } = await API.post(`/api/${API_VERSION}/register`, {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password
    })
    localStorage.setItem('token', data.token)
    commit('REGISTER_SUCCESS', data.token)
  },

  async getUser({ state, commit }) {
    const { data } = await API.get(`/api/${API_VERSION}/me`, {
      headers: getHeaders(state.token)
    })
    commit('GET_USER_SUCCESS', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
