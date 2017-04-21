import React, { Component } from 'react'

import AccountContainer from '../containers/AccountContainer'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import cookie from 'react-cookie'
import { pageWithDefaultLayout } from '../hocs/page'
import withUser from '../hocs/withUser'

class account extends Component {
  static propTypes = {
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
        <AccountContainer />
      </div>
    )
  }
}

export default pageWithDefaultLayout(withUser(account))
