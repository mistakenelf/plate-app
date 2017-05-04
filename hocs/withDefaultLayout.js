import React, { Component } from 'react'

import Cookies from 'js-cookie'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PropTypes from 'prop-types'
import configureLoadingProgressBar from '../utils/routing'

export default ComposedComponent => {
  return class WithDefaultLayout extends Component {
    static propTypes = {
      auth: PropTypes.object
    }

    state = {
      open: false
    }

    componentDidMount() {
      configureLoadingProgressBar()
    }

    openDrawer = () => {
      this.setState({
        open: true
      })
    }

    closeDrawer = () => {
      this.setState({
        open: false
      })
    }

    render() {
      return (
        <div>
          <Header title="Plate" />
          <Navigation
            open={this.state.open}
            openDrawer={this.openDrawer}
            closeDrawer={this.closeDrawer}
            token={Cookies.get('token') || this.props.auth.token}
          />
          <ComposedComponent {...this.props} />
          <style jsx global>
            {`
              * {
                margin: 0;
                box-sizing: border-box;
              }
              a {
                text-decoration: none;
              }
              body {
                font-family: Roboto, sans-serif;
                margin-top: 60px;
                margin-bottom: 0px;
            }
          `}
          </style>
        </div>
      )
    }
  }
}
