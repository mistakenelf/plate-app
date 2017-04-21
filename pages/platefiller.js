import React, { Component } from 'react'

import Header from '../components/Header/Header'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import cookie from 'react-cookie'
import { pageWithDefaultLayout } from '../hocs/page'

class platefiller extends Component {
  static propTypes = {
    auth: PropTypes.object,
    url: PropTypes.object
  }

  render() {
    if (this.props.auth.loggedIn === false) {
      return (
        <div>
          <Header title="Plate Filler" />
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

export default pageWithDefaultLayout(platefiller)
