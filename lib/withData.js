import rootReducer, { client } from '../redux/rootReducer'

import { ApolloProvider } from 'react-apollo'
import React from 'react'
import { initStore } from '../redux/createStore'

export default (Component) => (
  class extends React.Component {
    static getInitialProps ({ req }) {
      const isServer = !!req
      const store = initStore(rootReducer, {}, isServer)
      return { initialState: store.getState(), isServer }
    }

    constructor (props) {
      super(props)
      this.store = initStore(rootReducer, props.initialState, props.isServer)
    }

    render () {
      return (
        <ApolloProvider client={client} store={this.store}>
          <Component />
        </ApolloProvider>
      )
    }
  }
)
