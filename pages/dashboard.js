import Cookies from 'js-cookie'
import DashboardContainer from '../containers/DashboardContainer'
import PropTypes from 'prop-types'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithDefaultLayout } from '../hocs/page'

const dashboard = ({ getUserProfile }) => {
  if (getUserProfile === null) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }

  if (!Cookies.get('token')) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }

  return (
    <div>
      <DashboardContainer user={getUserProfile} />
    </div>
  )
}

dashboard.propTypes = {
  getUserProfile: PropTypes.object
}

export default pageWithDefaultLayout(dashboard)
