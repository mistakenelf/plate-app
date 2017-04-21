import React, { Component } from 'react'

import Header from '../components/Header/Header'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import cookie from 'react-cookie'
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
          <Header title="Dashboard" />
          <Unauthorized />
        </div>
      )
    }

    if (!cookie.load('token')) {
      return (
        <div>
          <Header title="Plate Filler" />
          <Unauthorized />
        </div>
      )
    }

    return (
      <div>
        <Header title="Plate Filler" />
        <PlateFillerContainer plateId={this.props.url.query.id} />
      </div>
    )
  }
}

export default pageWithDefaultLayout(withUser(platefiller))
