import Header from '../components/Header/Header'
import HomeContainer from '../containers/HomeContainer'
import React from 'react'
import page from '../hocs/page'

export default page(() => (
  <div>
    <Header title="Home" />
    <HomeContainer />
  </div>
))
