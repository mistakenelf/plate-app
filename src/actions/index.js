export function addTask(task) {
  return {
    type: 'ADD_TASK',
    task
  }
}

export function removeTask(id, task) {
  return {
    type: 'REMOVE_TASK',
    id,
    task
  }
}