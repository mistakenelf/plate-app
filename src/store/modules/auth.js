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

const actions = {
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
  }
}

const mutations = {
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
