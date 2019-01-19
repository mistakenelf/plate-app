import { API, getHeaders } from '@/api'
import { API_VERSION } from '@/constants/api'

export default {
  async createTask({ commit, rootState }, payload) {
    await API.post(`/api/${API_VERSION}/tasks/create`, payload, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('CREATE_TASK_SUCCESS', payload)
  },
  async getTasks({ commit, rootState }) {
    const tasks = await API.get(`/api/${API_VERSION}/tasks`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_TASKS_SUCCESS', tasks.data)
  }
}
