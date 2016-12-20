import { IndexRoute, Route } from 'react-router'

import Dashboard from '../features/dashboard/Dashboard'
import ForgotPassword from '../features/forgotPassword/ForgotPassword'
import Home from '../features/home/Home'
import Login from '../features/login/Login'
import MainLayout from '../components/mainLayout/MainLayout'
import NotFound from '../components/notFound/NotFound'
import PlateFiller from '../features/plateFiller/PlateFiller'
import React from 'react'
import Register from '../features/register/Register'

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
