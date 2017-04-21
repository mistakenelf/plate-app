import React, { Component } from 'react'

import DashboardContainer from '../containers/DashboardContainer'
import Header from '../components/Header/Header'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import cookie from 'react-cookie'
import { pageWithDefaultLayout } from '../hocs/page'

class dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object,
    getUserProfile: PropTypes.object
  }

  render() {
    if (!cookie.load('token')) {
      return (
        <div>
          <Header title="Dashboard" />
          <Unauthorized />
        </div>
      )
    }

    return (
      <div>
        <Header title="Dashboard" />
        <DashboardContainer user={this.props.getUserProfile} />
      </div>
    )
  }
}

export default pageWithDefaultLayout(dashboard)
