export default {
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
  TOGGLE_LIST_COMPLETED(state, payload) {
    state.todoLists[payload.payload.index].completed = !payload.payload.todoList
      .completed
  },
  DELETE_TODO(state, payload) {
    state.todoList.todos.splice(payload.payload.index, 1)
  },
  TOGGLE_TODO_COMPLETED(state, payload) {
    state.todoList.todos[payload.payload.index].completed = !payload.payload
      .todo.completed
  }
}
