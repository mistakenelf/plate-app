import React from 'react'
import Navigation from '../components/Navigation'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function MainLayout({children}) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Navigation />
        {children}
      </div>
    </MuiThemeProvider>
  )
}

export default MainLayout
