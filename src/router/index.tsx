import { Switch } from 'react-router-dom'
import React from 'react'

import Login from '../views/Login/Login'
import Dashboard from '../views/Dashboard/Dashboard'
import Tasks from '../views/Tasks/Tasks'

import DefaultLayoutRoute from './components/DefaultLayoutRoute'
import SimpleLayoutRoute from './components/SimpleLayoutRoute'

function Router() {
  return (
    <Switch>
      <SimpleLayoutRoute exact path="/" component={Login} />
      <DefaultLayoutRoute exact path="/dashboard" component={Dashboard} />
      <DefaultLayoutRoute exact path="/tasks" component={Tasks} />
    </Switch>
  )
}

export default Router
