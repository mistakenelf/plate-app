import { API, getHeaders } from '@/helpers/api'
import { API_VERSION } from '@/helpers/constants'

export default {
  async getDashboard({ commit, rootState }) {
    const { data } = await API.get(`/api/${API_VERSION}/dashboard`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_DASHBOARD_SUCCESS', data)
  }
}
