import './tap_events'

import rootReducer, { client } from '../redux/rootReducer'

import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initStore } from '../redux/createStore'

export default (Component) => (
  class extends React.Component {
    static getInitialProps ({ req }) {
      const isServer = !!req
      const store = initStore(rootReducer, {}, isServer)
      return req
        ? {
          initialState: store.getState(),
          isServer,
          userAgent: req.headers['user-agent']
        }
        : {
          initialState: store.getState(),
          isServer,
          userAgent: navigator.userAgent
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
            <Component />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
)
