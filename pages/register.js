import React from 'react'
import Register from '../views/Register'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(function register() {
  return <Register />
})
