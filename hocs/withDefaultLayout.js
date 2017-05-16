import React, { Component } from 'react'

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PropTypes from 'prop-types'
import configureLoadingProgressBar from '../lib/routing'

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
        <div className="bottom-padding">
          <Header title="Plate" />
          <Navigation loggedIn={this.props.auth.loggedIn} />
          <ComposedComponent {...this.props} />
          <style jsx>{`
            .bottom-padding {
              padding-bottom: 30px;
            }
          `}</style>
        </div>
      )
    }
  }
}
