import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as firebase from 'firebase'
import MainLayout from '../../layouts/MainLayout'
import FormLayout from '../../layouts/FormLayout'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import NotFound from '../../components/notFound/NotFound'
import Dashboard from '../../pages/dashboard/Dashboard'
import Workspace from '../../pages/workspace/Workspace'
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

function App() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
        <Route path="/">
          <Route component={FormLayout}>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Route>
          <Route component={MainLayout}>
            <IndexRoute component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/workspace" component={Workspace} />
          </Route>
          <Route component={FormLayout}>
            <Route path="*" component={NotFound} />
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
