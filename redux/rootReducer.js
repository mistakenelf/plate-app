import ApolloClient from 'apollo-client'
import { combineReducers } from 'redux'
import globalMenu from './modules/globalMenu'
import loginForm from './modules/loginForm'

export const client = new ApolloClient()

export default combineReducers({
  globalMenu,
  loginForm,
  apollo: client.reducer()
})
