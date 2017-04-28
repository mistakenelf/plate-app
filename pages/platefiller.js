import React, { Component } from 'react'

import Cookies from 'js-cookie'
import PlateFiller from '../views/PlateFiller'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(
  class extends Component {
    static propTypes = {
      url: PropTypes.object,
      getUserProfile: PropTypes.object
    }

    render() {
      const { getUserProfile, url } = this.props
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
      return <PlateFiller plateId={url.query.id} />
    }
  }
)
