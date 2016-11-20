import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NotFound from './NotFound'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'

injectTapEventPlugin()

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <NotFound />
    </MuiThemeProvider>,
    div)
})
