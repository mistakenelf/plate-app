import 'isomorphic-fetch'
import '../utils/offline_install'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { initClient } from '../utils/initClient'
import { loadAccessToken } from '../utils/cookieUtils'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class WithData extends Component {
    static propTypes = {
      headers: PropTypes.object,
      initialState: PropTypes.object
    }

    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      const headers = ctx.req ? ctx.req.headers : {}
      const client = initClient(headers)

      let token

      if (!process.browser) {
        token = ctx.req.cookies.accesstoken
      }

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        token: token || loadAccessToken(),
        ...subProps
      }

      if (!process.browser) {
        await getDataFromTree(
          <ApolloProvider client={client}>
            <ComposedComponent {...props} />
          </ApolloProvider>
        )
      }

      return {
        initialState: {
          apollo: {
            data: client.getInitialState().data
          }
        },
        headers,
        ...props
      }
    }

    constructor(props) {
      super(props)
      this.client = initClient(this.props.headers, this.props.initialState)
    }

    render() {
      return (
        <ApolloProvider client={this.client}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
