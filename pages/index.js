import Header from '../components/Header/Header'
import HomeContainer from '../containers/HomeContainer'
import React from 'react'
import page from '../hocs/page'
import withAuth from '../hocs/withAuth'

export default page(
  withAuth(() => (
    <div>
      <Header title="Home" />
      <HomeContainer />
    </div>
  ))
)
