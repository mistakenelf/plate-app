import './index.css'

import * as firebase from 'firebase'

import store, { history } from './app/store'

import { Provider } from 'react-redux'
import React from 'react'
import { Router } from 'react-router'
import { render } from 'react-dom'
import routes from './app/routes'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDL-jDWSC5lrRfRsngBu2gPTEmL2hO2SXE',
  authDomain: 'plate-a0b1b.firebaseapp.com',
  databaseURL: 'https://plate-a0b1b.firebaseio.com',
  storageBucket: 'plate-a0b1b.appspot.com',
  messagingSenderId: '1011831735527'
}

firebase.initializeApp(config)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
