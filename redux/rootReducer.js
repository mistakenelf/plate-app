import ApolloClient from 'apollo-client'
import { combineReducers } from 'redux'
import layout from './modules/layout'

export const client = new ApolloClient()

export default combineReducers({
  layout,
  apollo: client.reducer()
})
