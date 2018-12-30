export default {
  LOGIN_SUCCESS(state, token) {
    state.token = token
  },
  LOGOUT_SUCCESS(state) {
    state.user = {}
    state.token = ''
  },
  REGISTER_SUCCESS(state, token) {
    state.token = token
  },
  GET_USER_SUCCESS(state, user) {
    state.user = user
  }
}
