/* global it, expect, describe */

import '../lib/tap_events'

import Banner from '../components/Banner/Banner'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Banner />
    </MuiThemeProvider>,
    div)
})

describe('Banner snapshot', () => {
  it('renders without crashing!"', () => {
    const component = renderer.create(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Banner />
      </MuiThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
