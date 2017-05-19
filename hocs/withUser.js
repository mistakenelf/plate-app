import React, { Component } from 'react'

import GetUserProfile from '../queries/getUserProfile'
import Loader from '../components/Loader/Loader'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { loadAccessToken } from '../utils/cookieUtils'

export default ComposedComponent => {
  class WithProfile extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      loading: PropTypes.bool
    }

    render() {
      if (this.props.loading) {
        return <Loader />
      } else {
        return <ComposedComponent {...this.props} />
      }
    }
  }

  return graphql(GetUserProfile, {
    props: ({ data: { loading, getUserProfile } }) => ({
      loading,
      getUserProfile
    }),
    options: props => ({
      variables: {
        accesstoken: props.serverRendered ? props.token : loadAccessToken()
      }
    })
  })(WithProfile)
}
