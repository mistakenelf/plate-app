function addTask(task) {
  return {
    type: 'ADD_TASK',
    task
  }
}

function removeTask(id, task) {
  return {
    type: 'REMOVE_TASK',
    id,
    task
  }
}