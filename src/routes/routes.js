import { IndexRoute, Route } from 'react-router'

import Dashboard from '../modules/dashboard/Dashboard'
import ForgotPassword from '../modules/forgotPassword/ForgotPassword'
import Home from '../modules/home/Home'
import Login from '../modules/login/Login'
import MainLayout from '../components/mainLayout/MainLayout'
import NotFound from '../components/notFound/NotFound'
import PlateFiller from '../modules/plateFiller/PlateFiller'
import React from 'react'
import Register from '../modules/register/Register'

const routes = (
  <Route path='/'>
    <Route component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/forgotPassword' component={ForgotPassword} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard/:id' component={PlateFiller} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

export default routes
