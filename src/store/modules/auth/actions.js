import { API, getHeaders } from '@/api'
import { API_VERSION } from '@/constants/api'

export default {
  async login({ commit }, payload) {
    try {
      const { data } = await API.post(`/api/${API_VERSION}/login`, {
        email: payload.email,
        password: payload.password
      })
      localStorage.setItem('token', data.token)
      commit('LOGIN_SUCCESS', data.token)
    } catch (e) {
      commit('LOGIN_FAILURE', e.response.data.message)
    }
  },

  async logout({ commit }) {
    localStorage.removeItem('token')
    commit('LOGOUT_SUCCESS')
  },

  async register({ commit }, payload) {
    try {
      const { data } = await API.post(`/api/${API_VERSION}/register`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password
      })
      localStorage.setItem('token', data.token)
      commit('REGISTER_SUCCESS', data.token)
    } catch (e) {
      commit('REGISTER_FAILURE', e.response.data.message)
    }
  },

  async getUser({ state, commit }) {
    const { data } = await API.get(`/api/${API_VERSION}/me`, {
      headers: getHeaders(state.token)
    })
    commit('GET_USER_SUCCESS', data)
  }
}
