import { API, getHeaders } from '../../helpers/api'
import { API_VERSION } from '../../helpers/constants'

const mutations = {
  DELETE_TODO(state, payload) {
    payload.rootState.todoList.todoList.todos.splice(payload.payload.index, 1)
  },
  TOGGLE_COMPLETED(state, payload) {
    payload.rootState.todoList.todoList.todos[
      payload.payload.index
    ].completed = !payload.payload.todo.completed
  }
}

const actions = {
  async deleteTodo({ commit, rootState }, payload) {
    const data = {
      rootState,
      payload
    }

    commit('DELETE_TODO', data)

    await API.delete(`/api/${API_VERSION}/todos`, {
      headers: getHeaders(rootState.auth.token),
      data: payload.todo
    })
  },

  async toggleCompleted({ commit, rootState }, payload) {
    const todoPayload = {
      payload,
      rootState
    }
    commit('TOGGLE_COMPLETED', todoPayload)

    await API.put(`/api/${API_VERSION}/todos`, payload.todo, {
      headers: getHeaders(rootState.auth.token)
    })
  }
}

export default {
  namespaced: true,
  mutations,
  actions
}
