import React, { Component } from 'react'

import Cookies from 'js-cookie'
import GetUserProfile from '../queries/GetUserProfileQuery'
import Loader from '../components/Loader/Loader'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

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
    options: () => ({
      variables: {
        token: Cookies.get('token') || ''
      },
      fetchPolicy: 'cache-and-network'
    })
  })(WithProfile)
}
