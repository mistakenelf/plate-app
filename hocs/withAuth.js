import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

import Loader from '../components/Loader/Loader'
import PropTypes from 'prop-types'
import Router from 'next/router'
import cookie from 'react-cookie'
import { loadGetInitialProps } from 'next/dist/lib/utils'

let auth = { loggedIn: false }

function authWrapper(ComposedComponent) {
  class withAuth extends Component {
    static propTypes = {
      loading: PropTypes.bool,
      userProfile: PropTypes.object,
      serverRendered: PropTypes.bool,
      auth: PropTypes.object
    }

    static async getInitialProps(ctx) {
      if (!process.browser) {
        if (ctx.req.cookies.token) {
          auth.loggedIn = true
        } else {
          auth.loggedIn = false
        }
      }

      return {
        serverRendered: !process.browser,
        auth,
        ...(await loadGetInitialProps(ComposedComponent, ctx))
      }
    }

    componentDidMount() {
      if (this.props.serverRendered) {
        auth = this.props.auth
      }

      if (auth.loggedIn === false) {
        Router.push('/login')
      }
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
