import React from 'react'
import { render } from 'react-dom'
import { Router,Route, IndexRoute, hashHistory } from 'react-router'
import App from './views/App'
import Home from './views/home/Home'
import Login from './views/login/Login'
import Register from './views/register/Register'
import NotFound from './components/NotFound'
import './index.css'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDjNxAdCF1uaRzZSlHxw8CDyYTnfb83c5M",
  authDomain: "spendy-8eb10.firebaseapp.com",
  databaseURL: "https://spendy-8eb10.firebaseio.com",
  storageBucket: "spendy-8eb10.appspot.com",
  messagingSenderId: "500637043981"
};

firebase.initializeApp(config);

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
