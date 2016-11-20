import * as firebase from 'firebase'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import Register from './Register'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDL-jDWSC5lrRfRsngBu2gPTEmL2hO2SXE",
  authDomain: "plate-a0b1b.firebaseapp.com",
  databaseURL: "https://plate-a0b1b.firebaseio.com",
  storageBucket: "plate-a0b1b.appspot.com",
  messagingSenderId: "1011831735527"
}

firebase.initializeApp(config)

injectTapEventPlugin()

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Register />
    </MuiThemeProvider>,
    div)
})
