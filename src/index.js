import React from 'react'
import { render } from 'react-dom'
import { Router,Route, IndexRoute, browserHistory } from 'react-router'
import App from './views/App'
import Home from './views/home/Home'
import Login from './views/login/Login'
import Register from './views/register/Register'
import NotFound from './components/NotFound'
import './index.css'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
)
