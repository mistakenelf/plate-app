import React from 'react'
import { render } from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './styles/main.css'

injectTapEventPlugin();

render(
  <App />,
  document.getElementById('root')
)
