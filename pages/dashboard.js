import rootReducer, { client } from '../redux/rootReducer'

import { ApolloProvider } from 'react-apollo'
import { Component } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import LayoutContainer from '../containers/LayoutContainer'
import { initStore } from '../redux/createStore'

export default class extends Component {
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
      <ApolloProvider store={this.store} client={client}>
        <LayoutContainer>
          <Dashboard />
        </LayoutContainer>
      </ApolloProvider>
    )
  }
}
