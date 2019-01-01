export default {
  LOGIN_SUCCESS(state, token) {
    state.token = token
  },
  LOGIN_FAILURE(state, error) {
    state.loginError = error
  },
  LOGOUT_SUCCESS(state) {
    state.user = {}
    state.token = ''
  },
  REGISTER_SUCCESS(state, token) {
    state.token = token
  },
  REGISTER_FAILURE(state, error) {
    state.registerError = error
  },
  GET_USER_SUCCESS(state, user) {
    state.user = user
  }
}
