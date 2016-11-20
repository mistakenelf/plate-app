import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import * as firebase from 'firebase'

import store, { history } from './store/store'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import React from 'react'
import { Router } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import routes from './routes/routes'

injectTapEventPlugin()

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDL-jDWSC5lrRfRsngBu2gPTEmL2hO2SXE",
  authDomain: "plate-a0b1b.firebaseapp.com",
  databaseURL: "https://plate-a0b1b.firebaseio.com",
  storageBucket: "plate-a0b1b.appspot.com",
  messagingSenderId: "1011831735527"
}

firebase.initializeApp(config)

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
