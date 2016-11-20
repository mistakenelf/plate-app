function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          taskName: action.taskName,
          taskDescription: action.taskDescription
        }
      ]
    case 'REMOVE_TASK':
      return state.filter(todo =>
        todo.id !== action.id
      )
    default:
      return state
  }
}

export default tasks
