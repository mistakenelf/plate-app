import React from 'react'
import { StyleRoot } from 'radium'
import Navigation from '../components/navigation/Navigation'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App({children}) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <StyleRoot>
        <Navigation />
        {children}
      </StyleRoot>
    </MuiThemeProvider>
  )
}

export default App
