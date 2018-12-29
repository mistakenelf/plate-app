import { API, getHeaders } from '../../helpers/api'
import { API_VERSION } from '../../helpers/constants'

const state = {
  todoLists: [],
  todoList: {}
}

const getters = {
  todoLists: state => state.todoLists,
  todoList: state => state.todoList
}

const mutations = {
  ADD_TODO_LIST(state, todoList) {
    state.todoLists.push(todoList)
  },
  GET_TODO_LISTS(state, todoLists) {
    state.todoLists = todoLists
  },
  GET_TODO_LIST(state, todoList) {
    state.todoList = todoList
  },
  DELETE_TODO_LIST(state, todoListIndex) {
    state.todoLists.splice(todoListIndex, 1)
  },
  TOGGLE_COMPLETED(state, payload) {
    state.todoLists[payload.payload.index].completed = !payload.payload.todoList
      .completed
  }
}

const actions = {
  async addTodoList({ commit, rootState }, payload) {
    const { data } = await API.post(`/api/${API_VERSION}/todo-lists`, payload, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('ADD_TODO_LIST', data)
  },

  async getTodoLists({ commit, rootState }) {
    const { data } = await API.get(`/api/${API_VERSION}/todo-lists`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_TODO_LISTS', data)
  },

  async getTodoList({ commit, rootState }, id) {
    const { data } = await API.get(`/api/${API_VERSION}/todo-lists/${id}`, {
      headers: getHeaders(rootState.auth.token)
    })
    await API.get(`/api/${API_VERSION}/dashboard`, {
      headers: getHeaders(rootState.auth.token)
    })
    commit('GET_TODO_LIST', data)
  },

  async deleteTodoList({ commit, rootState }, payload) {
    await API.delete(`/api/${API_VERSION}/todo-lists`, {
      headers: getHeaders(rootState.auth.token),
      data: payload.todoList
    })
    commit('DELETE_TODO_LIST', payload.index)
  },

  async toggleCompleted({ commit, rootState }, payload) {
    const todoList = {
      ...payload.todoList,
      completed: !payload.todoList.completed
    }

    await API.put(`/api/${API_VERSION}/todo-lists`, todoList, {
      headers: getHeaders(rootState.auth.token)
    })

    const todoPayload = {
      payload,
      rootState
    }
    commit('TOGGLE_COMPLETED', todoPayload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
