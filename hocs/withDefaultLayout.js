import React, { Component } from 'react'

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PropTypes from 'prop-types'
import configureLoadingProgressBar from '../utils/routing'
import { getUserProfile } from '../queries/getUserProfile'
import { graphql } from 'react-apollo'

export default ComposedComponent => {
  class WithDefaultLayout extends Component {
    static propTypes = {
      getUserProfile: PropTypes.object
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
            user={this.props.getUserProfile || {}}
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

  return graphql(getUserProfile, {
    props: ({ data: { loading, getUserProfile } }) => ({
      loading,
      getUserProfile
    }),
    options: props => ({
      variables: { token: props.auth.token || '' },
      fetchPolicy: 'cache-and-network'
    })
  })(WithDefaultLayout)
}
