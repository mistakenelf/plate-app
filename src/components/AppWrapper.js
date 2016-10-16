import React from 'react'
import { StyleRoot } from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

function AppWrapper({children}) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <StyleRoot>
        {children}
      </StyleRoot>
    </MuiThemeProvider>
  )
}

export default AppWrapper
