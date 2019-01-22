export default {
  CREATE_TASK_SUCCESS(state, task) {
    state.tasks.push(task)
  },
  GET_TASKS_SUCCESS(state, tasks) {
    state.tasks = tasks
  },
  GET_TASK_DETAILS_SUCCESS(state, task) {
    state.task = task
  },
  DELETE_TASK_SUCCESS(state, task) {
    state.tasks.slice(task, 0)
  },
  UPDATE_TASK_SUCCESS(state, task) {
    state.task = task
  }
}
