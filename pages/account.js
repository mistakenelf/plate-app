import AccountContainer from '../containers/AccountContainer'
import Header from '../components/Header/Header'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(() => (
  <div>
    <Header title="Account" />
    <AccountContainer />
  </div>
))
