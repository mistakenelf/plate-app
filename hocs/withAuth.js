import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

import Loader from '../components/Loader/Loader'
import PropTypes from 'prop-types'
import cookie from 'react-cookie'

function authWrapper(ComposedComponent) {
  class withAuth extends Component {
    static propTypes = {
      loading: PropTypes.bool,
      userProfile: PropTypes.object
    }

    render() {
      if (this.props.loading) {
        return <Loader />
      }

      return <ComposedComponent {...this.props} />
    }
  }

  const FetchProfileQuery = gql`
    query userProfile($id: ID) {
      userProfile(id: $id) {
        firstName
        lastName
        username
      }
    }
  `

  return graphql(FetchProfileQuery, {
    props: ({ data: { loading, userProfile } }) => ({
      loading,
      userProfile
    }),
    options: {
      fetchPolicy: 'cache-and-network',
      variables: {
        id: cookie.load('token')
      }
    }
  })(withAuth)
}

export default authWrapper
