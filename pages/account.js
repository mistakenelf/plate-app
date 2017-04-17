import AccountContainer from '../containers/AccountContainer'
import Header from '../components/Header/Header'
import React from 'react'
import page from '../hocs/page'

export default page(() => (
  <div>
    <Header title="Account" />
    <AccountContainer />
  </div>
))
