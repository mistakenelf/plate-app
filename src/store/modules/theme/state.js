const darkTheme = {
  // Background colors
  sideNavBg: 'bg-black',
  totalsPanelBg: 'bg-black',
  panelHeaderBg: 'bg-black',
  panelBg: 'bg-grey-darker',
  todoListPanelBg: 'bg-grey-darker',
  todoListHover: 'hover:bg-grey-dark',
  remindersPanelBg: 'bg-grey-darker',
  notesPanelBg: 'bg-grey-darker',
  eventsPanelBg: 'bg-grey-darker',
  navbarBg: 'bg-black',

  // General colors
  textColor: 'text-white'
}

const lightTheme = {
  // Background colors
  sideNavBg: 'bg-grey-lighter',
  totalsPanelBg: 'bg-white',
  panelHeaderBg: 'bg-teal-dark',
  panelBg: 'bg-white',
  todoListPanelBg: 'bg-white',
  todoListHover: 'hover:bg-grey-lighter',
  remindersPanelBg: 'bg-white',
  notesPanelBg: 'bg-white',
  eventsPanelBg: 'bg-white',
  navbarBg: 'bg-blue-darker',

  // General colors
  textColor: 'text-grey-darkest'
}

export default {
  darkTheme,
  lightTheme,
  selectedThemeName: localStorage.getItem('theme') || 'light',
  selectedThemeClasses:
    localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme
}
