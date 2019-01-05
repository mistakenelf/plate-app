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
  setTheme({ commit }) {
    let theme = localStorage.getItem('theme')
    if (theme) {
      if (theme === 'dark') {
        document.body.style.color = '#ffffff'
        document.body.style.background = '#3d4852'
      } else {
        document.body.style.color = '#444'
        document.body.style.background = '#dae1e7'
      }
    } else {
      theme = localStorage.setItem('theme', 'light')
    }
    commit('SET_THEME_SUCCESS', theme)
  }
}
