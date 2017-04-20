import React, { Component, PropTypes } from 'react'

import { getUserProfile } from '../queries/getUserProfile'
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
        return null
      } else {
        return <ComposedComponent {...this.props} />
      }
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
  })(WithProfile)
}
