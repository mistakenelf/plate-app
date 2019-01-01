export default {
  toggleTheme({ commit }, payload) {
    localStorage.setItem('theme', payload.selectedTheme)
    commit('TOGGLE_THEME_SUCCESS', payload.selectedTheme)
  }
}
