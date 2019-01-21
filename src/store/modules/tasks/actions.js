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
  },
  async getTaskDetails({ commit, rootState }, id) {
    const taskDetails = await API.get(`/api/${API_VERSION}/tasks/${id}`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_TASK_DETAILS_SUCCESS', taskDetails.data)
  },
  async deleteTask({ commit, rootState }, id) {
    const deletedTask = await API.delete(`/api/${API_VERSION}/tasks/${id}`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('DELETE_TASK_SUCCESS', deletedTask.data)
  }
}
