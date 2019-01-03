import { API, getHeaders } from '@/api'
import { API_VERSION } from '@/constants/api'

export default {
  async getDashboard({ commit, rootState }) {
    const { data } = await API.get(`/api/${API_VERSION}/dashboard`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_DASHBOARD_SUCCESS', data)
  }
}
