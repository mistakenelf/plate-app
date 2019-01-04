export default {
  TOGGLE_THEME_SUCCESS(state, themeName) {
    ;(state.selectedThemeName = themeName),
      (state.selectedThemeClasses =
        themeName === 'light' ? state.lightTheme : state.darkTheme)
  },
  SET_THEME_SUCCESS(state, theme) {
    state.selectedThemeName = theme
  }
}
