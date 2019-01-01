import { lightTheme, darkTheme } from '../../../helpers/theme'

export default {
  TOGGLE_THEME_SUCCESS(state, themeName) {
    console.log('THEME: ', themeName)
    ;(state.selectedThemeName = themeName),
      (state.selectedThemeClasses =
        themeName === 'light' ? lightTheme : darkTheme)
  }
}
