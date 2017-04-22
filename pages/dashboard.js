import React, { Component } from 'react'

import Cookies from 'universal-cookie'
import DashboardContainer from '../containers/DashboardContainer'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithDefaultLayout } from '../hocs/page'
import withUser from '../hocs/withUser'

class dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object,
    getUserProfile: PropTypes.object
  }

  render() {
    const cookies = new Cookies()

    if (this.props.getUserProfile === null) {
      return (
        <div>
          <Unauthorized />
        </div>
      )
    }

    if (!cookies.get('token')) {
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
