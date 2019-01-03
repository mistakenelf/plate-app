import { lightTheme, darkTheme } from '../../../helpers/theme'

export default {
  selectedThemeName: localStorage.getItem('theme') || 'dark',
  selectedThemeClasses:
    localStorage.getItem('theme') === 'light' ? lightTheme : darkTheme
}
