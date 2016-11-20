import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'

injectTapEventPlugin()

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Home />
    </MuiThemeProvider>,
    div)
})
