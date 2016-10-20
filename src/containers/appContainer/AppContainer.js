import React from 'react'
import { StyleRoot } from 'radium'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router,Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as firebase from 'firebase'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import Home from '../../views/home/Home'
import Login from '../../views/login/Login'
import Register from '../../views/register/Register'
import NotFound from '../../components/notFound/NotFound'

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

function AppContainer() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <StyleRoot>
        <Router history={hashHistory}>
          <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </StyleRoot>
    </MuiThemeProvider>
  )
}

export default AppContainer
