/* global it, expect, describe */

import '../lib/tap_events'

import Dashboard from '../components/Dashboard/Dashboard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Dashboard />
    </MuiThemeProvider>,
    div)
})

describe('Dashboard snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Dashboard />
      </MuiThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
