import LoginContainer from '../containers/LoginContainer'
import React from 'react'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(() => (
  <div>
    <LoginContainer />
  </div>
))
