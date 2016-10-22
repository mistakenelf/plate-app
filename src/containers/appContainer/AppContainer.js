import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router,Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as firebase from 'firebase'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import Home from '../../views/home/Home'
import Login from '../../views/login/Login'
import Register from '../../views/register/Register'
import NotFound from '../../components/notFound/NotFound'
import Dashboard from '../../views/dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.css'

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
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  )
}

export default AppContainer
