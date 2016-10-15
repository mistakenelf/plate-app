import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './views/Home'
import Account from './views/Account'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
}

export default App
