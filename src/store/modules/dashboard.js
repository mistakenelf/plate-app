import { API, getHeaders } from '../../helpers/api'
import { API_VERSION } from '../../helpers/constants'

const state = {
  dashboard: {
    dashboardCounts: {
      todoCount: 0
    }
  }
}

const mutations = {
  GET_DASHBOARD(state, dashboard) {
    state.dashboard = dashboard
  }
}

const actions = {
  async getDashboard({ commit, rootState }) {
    const { data } = await API.get(`/api/${API_VERSION}/dashboard`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_DASHBOARD', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
