import LoginContainer from '../containers/LoginContainer'
import React from 'react'
import { pageWithNavlessLayout } from '../hocs/page'

const login = () => {
  return (
    <div>
      <LoginContainer />
    </div>
  )
}

export default pageWithNavlessLayout(login)
