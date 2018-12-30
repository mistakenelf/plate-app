export default {
  isLoggedIn: state => !!state.token,
  currentUesr: state => state.user
}
