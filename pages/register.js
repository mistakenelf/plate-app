import React from 'react'
import RegisterContainer from '../containers/RegisterContainer'
import { pageWithNavlessLayout } from '../hocs/page'

const register = () => {
  return (
    <div>
      <RegisterContainer />
    </div>
  )
}

export default pageWithNavlessLayout(register)
