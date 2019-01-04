export default {
  toggleTheme({ commit }, payload) {
    localStorage.setItem('theme', payload.selectedThemeName)

    if (payload.selectedThemeName === 'dark') {
      document.body.style.color = '#ffffff'
      document.body.style.background = '#3d4852'
    } else {
      document.body.style.color = '#444'
      document.body.style.background = '#dae1e7'
    }

    commit('TOGGLE_THEME_SUCCESS', payload.selectedThemeName)
  },
  setTheme({ commit }, payload) {
    localStorage.setItem('theme', payload.theme)
    commit('SET_THEME_SUCCESS', payload.theme)
  }
}
