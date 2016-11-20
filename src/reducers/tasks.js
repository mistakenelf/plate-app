function removeTask(state = [], action) {
  return state.filter(todo =>
    todo.id !== action.id
  )
}

export default removeTask
