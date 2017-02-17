import './tap_events'
import 'isomorphic-fetch'

import { ApolloProvider, getDataFromTree } from 'react-apollo'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import { client } from '../store/initClient'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initStore } from '../store/initStore'
import reducer from '../store/reducer'

export default (Component) => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const isServer = !!req
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

      // Setup redux store
      const store = initStore(reducer, {}, isServer)

      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
              <Component {...pageProps} />
            </MuiThemeProvider>
          </ApolloProvider>
        )
        await getDataFromTree(app)
      }

      return {
        ...pageProps,
        initialState: store.getState(),
        isServer,
        userAgent
      }
    }

    constructor (props) {
      super(props)
      this.store = initStore(reducer, props.initialState, props.isServer)
    }

    render () {
      return (
        <ApolloProvider client={client} store={this.store}>
          <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}>
            <Component {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
)
