import Cookies from 'js-cookie'
import DashboardView from '../views/Dashboard'
import PropTypes from 'prop-types'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

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
      <DashboardView user={getUserProfile} />
    </div>
  )
}

dashboard.propTypes = {
  getUserProfile: PropTypes.object
}

export default pageWithUserData(dashboard)
