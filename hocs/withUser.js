import React, { Component, PropTypes } from 'react'

import { getUserProfile } from '../queries/getUserProfile'

export default ComposedComponent => {
  return class WithProfile extends Component {
    static propTypes = {
      serverRendered: PropTypes.bool,
      auth: PropTypes.object.isRequired
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return graphql(getUserProfile, {
    props: ({ data: { loading, profile } }) => ({
      loading,
      profile
    }),
    options: props => ({
      variables: { token: props.auth.token },
      fetchPolicy: 'cache-and-network'
    })
  })(WithProfile)
}
