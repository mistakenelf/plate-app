import React from 'react'
import { StyleRoot } from 'radium';
import Navigation from '../components/Navigation'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { grey300 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  hero: {
    backgroundColor: grey300,
    height: "100vh"
  }
}

function App({children}) {
  return (
    <div style={styles.hero}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <StyleRoot>
          <Navigation />
          {children}
        </StyleRoot>
      </MuiThemeProvider>
    </div>
  )
}

export default App
