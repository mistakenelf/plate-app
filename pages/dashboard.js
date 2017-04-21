import React, { Component } from 'react'

import DashboardContainer from '../containers/DashboardContainer'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import cookie from 'react-cookie'
import { pageWithDefaultLayout } from '../hocs/page'
import withUser from '../hocs/withUser'

class dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object,
    getUserProfile: PropTypes.object
  }

  render() {
    if (this.props.getUserProfile === null) {
      return (
        <div>
          <Unauthorized />
        </div>
      )
    }

    if (!cookie.load('token')) {
      return (
        <div>
          <Unauthorized />
        </div>
      )
    }

    return (
      <div>
        <DashboardContainer user={this.props.getUserProfile} />
      </div>
    )
  }
}

export default pageWithDefaultLayout(withUser(dashboard))
