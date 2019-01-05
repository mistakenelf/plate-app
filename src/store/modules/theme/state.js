const darkTheme = {
  // Background colors
  sideNavBg: 'bg-grey-darkest',
  totalsPanelBg: 'bg-grey-darkest',
  panelHeaderBg: 'bg-grey-darkest',
  panelBg: 'bg-grey-darker',
  todoListPanelBg: 'bg-grey-darker',
  todoListHover: 'hover:bg-grey-dark',
  remindersPanelBg: 'bg-grey-darker',
  notesPanelBg: 'bg-grey-darker',
  eventsPanelBg: 'bg-grey-darker',
  navbarBg: 'bg-blue-darkest',

  // General colors
  textColor: 'text-grey-lightest'
}

const lightTheme = {
  // Background colors
  sideNavBg: 'bg-grey-lighter',
  totalsPanelBg: 'bg-grey-lightest',
  panelHeaderBg: 'bg-teal-dark',
  panelBg: 'bg-grey-lightest',
  todoListPanelBg: 'bg-grey-lightest',
  todoListHover: 'hover:bg-grey-lighter',
  remindersPanelBg: 'bg-grey-lightest',
  notesPanelBg: 'bg-grey-lightest',
  eventsPanelBg: 'bg-grey-lightest',
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
