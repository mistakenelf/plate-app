export function removeTask(id, task) {
  return {
    type: 'REMOVE_TASK',
    id,
    task
  }
}
