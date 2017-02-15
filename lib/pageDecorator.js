import './tap_events'

import rootReducer, { client } from '../redux/rootReducer'

import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initStore } from '../redux/createStore'

export default (Component) => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const isServer = !!req
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

      // Setup redux store
      const store = initStore(rootReducer, {}, isServer)

      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
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
      this.store = initStore(rootReducer, props.initialState, props.isServer)
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
