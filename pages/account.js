import React, { Component } from 'react'

import Account from '../views/Account'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(
  class extends Component {
    static propTypes = {
      getUserProfile: PropTypes.object
    }

    render() {
      const { getUserProfile } = this.props

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
        <div className="container">
          <Account user={getUserProfile} />
        </div>
      )
    }
  }
)
