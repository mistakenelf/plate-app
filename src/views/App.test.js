import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { StyleRoot } from 'radium'
import App from './App'

injectTapEventPlugin()

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App />,
  div)
})
