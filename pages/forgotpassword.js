import ForgotPassword from '../views/ForgotPassword'
import React from 'react'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(function forgotpassword() {
  return <ForgotPassword />
})
