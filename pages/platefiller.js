import React, { Component } from 'react'

import Cookies from 'js-cookie'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithDefaultLayout } from '../hocs/page'
import withUser from '../hocs/withUser'

class platefiller extends Component {
  static propTypes = {
    auth: PropTypes.object,
    url: PropTypes.object,
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

    if (!Cookies.get('token')) {
      return (
        <div>
          <Unauthorized />
        </div>
      )
    }

    return (
      <div>
        <PlateFillerContainer plateId={this.props.url.query.id} />
      </div>
    )
  }
}

export default pageWithDefaultLayout(withUser(platefiller))
