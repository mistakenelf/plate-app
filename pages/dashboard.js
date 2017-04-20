import React, { Component } from 'react'

import DashboardContainer from '../containers/DashboardContainer'
import Header from '../components/Header/Header'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { pageWithDefaultLayout } from '../hocs/page'

class dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object,
    getUserProfile: PropTypes.object
  }

  componentDidMount() {
    if (this.props.auth.loggedIn === false) {
      Router.push('/login')
    }
  }

  render() {
    return (
      <div>
        <Header title="Dashboard" />
        <DashboardContainer user={this.props.getUserProfile} />
      </div>
    )
  }
}

export default pageWithDefaultLayout(dashboard)
