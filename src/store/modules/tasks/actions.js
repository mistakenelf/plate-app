import { API, getHeaders } from '@/api'
import { API_VERSION } from '@/constants/api'

export default {
  async createTask({ commit, rootState }, payload) {
    await API.post(`/api/${API_VERSION}/tasks/create`, payload, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('CREATE_TASK_SUCCESS', payload)
  }
}
