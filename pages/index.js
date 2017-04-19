import Header from '../components/Header/Header'
import HomeContainer from '../containers/HomeContainer'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(() => (
  <div>
    <Header title="Home" />
    <HomeContainer />
  </div>
))
