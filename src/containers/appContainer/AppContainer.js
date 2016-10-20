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

const config = {
  apiKey: "AIzaSyDjNxAdCF1uaRzZSlHxw8CDyYTnfb83c5M",
  authDomain: "spendy-8eb10.firebaseapp.com",
  databaseURL: "https://spendy-8eb10.firebaseio.com",
  storageBucket: "spendy-8eb10.appspot.com",
  messagingSenderId: "500637043981"
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
