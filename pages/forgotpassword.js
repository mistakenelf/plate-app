import ForgotPasswordContainer from '../containers/ForgotPasswordContainer'
import React from 'react'
import { pageWithNavlessLayout } from '../hocs/page'

const forgotpassword = () => {
  return (
    <div>
      <ForgotPasswordContainer />
    </div>
  )
}

export default pageWithNavlessLayout(forgotpassword)
