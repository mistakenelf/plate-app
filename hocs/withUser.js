import React, { Component } from 'react'

import GetUserProfile from '../queries/GetUserProfileQuery'
import Loader from '../components/Loader/Loader'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

export default ComposedComponent => {
  class WithProfile extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      auth: PropTypes.object.isRequired,
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
      variables: { token: props.auth.token || '' },
      fetchPolicy: 'cache-and-network'
    })
  })(WithProfile)
}
