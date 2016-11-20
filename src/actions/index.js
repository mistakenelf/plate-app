export function removeTask(id, task) {
  return {
    type: 'REMOVE_TASK',
    id,
    task
  }
}

let taskId = 0

export function addTask(taskName, taskDescription) {
  return {
    type: 'ADD_TASK',
    id: taskId++,
    taskName,
    taskDescription
  }
}
