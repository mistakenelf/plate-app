import DashboardContainer from '../containers/DashboardContainer'
import Header from '../components/Header/Header'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(() => (
  <div>
    <Header title="Dashboard" />
    <DashboardContainer />
  </div>
))
