import './tap_events'
import 'isomorphic-fetch'

import { ApolloProvider, getDataFromTree } from 'react-apollo'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initClient } from '../store/initClient'
import { initStore } from '../store/initStore'

export default (Component) => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const headers = ctx.req ? ctx.req.headers : {}
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

      // Initialize apollo client
      const client = initClient(headers)

      // Setup redux store
      const store = initStore(client, client.initialState)

      let props = {}

      if (Component.getInitialProps) {
        props = await Component.getInitialProps(ctx)
      }

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
              <Component {...props} />
            </MuiThemeProvider>
          </ApolloProvider>
        )
        await getDataFromTree(app)
      }

      const state = store.getState()

      return {
        initialState: {
          ...state,
          [client.reduxRootKey]: {
            data: client.getInitialState().data
          }
        },
        headers,
        userAgent,
        ...props
      }
    }

    constructor (props) {
      super(props)
      this.client = initClient(props.headers)
      this.store = initStore(this.client, props.initialState)
    }

    render () {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}>
            <Component {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
)
