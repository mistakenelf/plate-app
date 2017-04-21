import ForgotPasswordContainer from '../containers/ForgotPasswordContainer'
import React from 'react'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(() => (
  <div>
    <ForgotPasswordContainer />
  </div>
))
