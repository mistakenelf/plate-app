export default {
  CREATE_TASK_SUCCESS(state, task) {
    state.tasks.push(task)
  },
  GET_TASKS_SUCCESS(state, tasks) {
    state.tasks = tasks
  }
}
