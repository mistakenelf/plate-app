import React, { Component } from 'react'

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PropTypes from 'prop-types'
import configureLoadingProgressBar from '../utils/routing'

export default ComposedComponent => {
  return class WithDefaultLayout extends Component {
    static propTypes = {
      auth: PropTypes.object
    }

    componentDidMount() {
      configureLoadingProgressBar()
    }

    render() {
      return (
        <div>
          <Header title="Plate" />
          <Navigation loggedIn={this.props.auth.loggedIn} />
          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }
}
