import ApolloClient from 'apollo-client'
import { combineReducers } from 'redux'
import globalMenu from './modules/globalMenu'

export const client = new ApolloClient()

export default combineReducers({
  globalMenu,
  apollo: client.reducer()
})
