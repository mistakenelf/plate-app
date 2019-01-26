import { Switch } from 'react-router-dom'
import React from 'react'

import { Login } from '../views/Login/Login'
import { Dashboard } from '../views/Dashboard/Dashboard'

import { DefaultLayoutRoute } from './components/DefaultLayoutRoute'
import { SimpleLayoutRoute } from './components/SimpleLayoutRoute'

export function Router() {
  return (
    <Switch>
      <SimpleLayoutRoute exact path="/" component={Login} />
      <DefaultLayoutRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}
