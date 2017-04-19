import DashboardContainer from '../containers/DashboardContainer'
import Header from '../components/Header/Header'
import React from 'react'
import { pageWithAuth } from '../hocs/page'

export default pageWithAuth(() => (
  <div>
    <Header title="Dashboard" />
    <DashboardContainer />
  </div>
))
