import React from 'react'
import RegisterContainer from '../containers/RegisterContainer'
import { pageWithNavlessLayout } from '../hocs/page'

export default pageWithNavlessLayout(() => (
  <div>
    <RegisterContainer />
  </div>
))
