import React, { Component } from 'react'

import Header from '../components/Header/Header'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { pageWithDefaultLayout } from '../hocs/page'

class platefiller extends Component {
  static propTypes = {
    auth: PropTypes.object,
    url: PropTypes.object
  }

  componentDidMount() {
    if (this.props.auth.loggedIn === false) {
      Router.push('/login')
    }
  }

  render() {
    return (
      <div>
        <Header title="Plate Filler" />
        <PlateFillerContainer plateId={this.props.url.query.id} />
      </div>
    )
  }
}

export default pageWithDefaultLayout(platefiller)
