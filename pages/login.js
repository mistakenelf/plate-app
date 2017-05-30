import Login from '../views/Login'
import React from 'react'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(function login() {
  return <Login />
})
