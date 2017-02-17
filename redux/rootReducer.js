import ApolloClient, { createNetworkInterface } from 'apollo-client'

import { combineReducers } from 'redux'
import drawer from './modules/drawer'
import loginForm from './modules/loginForm'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' })
})

export default combineReducers({
  drawer,
  loginForm,
  apollo: client.reducer()
})
