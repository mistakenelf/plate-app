import 'isomorphic-fetch'
import '../utils/tap_events'
import '../utils/offline_install'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import getClientAndStore from '../store/clientAndStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { loadGetInitialProps } from 'next/dist/lib/utils'

function getInitialState(apolloClient, reduxStore) {
  return {
    ...reduxStore.getState(),
    apollo: {
      data: apolloClient.getInitialState().data
    }
  }
}

export default ComposedComponent => class WithData extends Component {
  static propTypes = {
    initialState: PropTypes.object.isRequired,
    clientAndStoreProps: PropTypes.shape({
      userAgent: PropTypes.string
    })
  }

  static async getInitialProps(ctx) {
    const subProps = await loadGetInitialProps(ComposedComponent, ctx)
    let token
    const userAgent = ctx.req
      ? ctx.req.headers['user-agent']
      : navigator.userAgent
    if (!process.browser) {
      token = ctx.req.cookies.token
    }
    const clientAndStoreProps = {
      token: token,
      userAgent: userAgent
    }

    const { apolloClient, reduxStore } = getClientAndStore(
      {},
      clientAndStoreProps
    )

    const props = {
      url: { query: ctx.query, pathname: ctx.pathname },
      ...subProps
    }

    if (!process.browser) {
      await getDataFromTree(
        <ApolloProvider client={apolloClient} store={reduxStore}>
          <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
            <ComposedComponent {...props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }

    return {
      initialState: getInitialState(apolloClient, reduxStore),
      clientAndStoreProps,
      ...props
    }
  }

  constructor(props) {
    super(props)
    const clientAndStore = getClientAndStore(
      this.props.initialState,
      this.props.clientAndStoreProps
    )
    this.apolloClient = clientAndStore.apolloClient
    this.reduxStore = clientAndStore.reduxStore
  }

  render() {
    return (
      <ApolloProvider client={this.apolloClient} store={this.reduxStore}>
        <MuiThemeProvider
          muiTheme={getMuiTheme({
            userAgent: this.props.clientAndStoreProps.userAgent
          })}
        >
          <ComposedComponent {...this.props} />
        </MuiThemeProvider>
      </ApolloProvider>
    )
  }
}
