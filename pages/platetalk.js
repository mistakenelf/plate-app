import React, { Component } from 'react'

import Cookies from 'js-cookie'
import PlateTalk from '../views/PlateTalk'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(
  class extends Component {
    static propTypes = {
      messages: PropTypes.array,
      getUserProfile: PropTypes.object
    }

    render() {
      const { getUserProfile, messages } = this.props

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
      return <PlateTalk messages={messages} user={getUserProfile} />
    }
  }
)
