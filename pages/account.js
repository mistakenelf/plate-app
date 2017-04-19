import AccountContainer from '../containers/AccountContainer'
import Header from '../components/Header/Header'
import React from 'react'
import { pageWithAuth } from '../hocs/page'

export default pageWithAuth(() => (
  <div>
    <Header title="Account" />
    <AccountContainer />
  </div>
))
