import 'isomorphic-fetch'
import '../lib/tap_events'
import '../lib/offline_install'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React, { Component } from 'react'

import Cookies from 'js-cookie'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initClient } from '../lib/initClient'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class WithData extends Component {
    static propTypes = {
      userAgent: PropTypes.string
    }

    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      const headers = ctx.req ? ctx.req.headers : {}
      const client = initClient(headers)

      let token

      const userAgent = ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent

      if (!process.browser) {
        token = ctx.req.cookies.token
      }

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        token: token || Cookies.get('token'),
        userAgent: userAgent,
        ...subProps
      }

      if (!process.browser) {
        await getDataFromTree(
          <ApolloProvider client={client}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
              <ComposedComponent {...props} />
            </MuiThemeProvider>
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
        userAgent,
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
          <MuiThemeProvider
            muiTheme={getMuiTheme({
              userAgent: this.props.userAgent
            })}
          >
            <ComposedComponent {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
