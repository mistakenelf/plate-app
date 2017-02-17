import { combineReducers } from 'redux'
import drawer from './modules/drawer'
import loginForm from './modules/loginForm'

export default function getReducer (client) {
  return combineReducers({
    drawer,
    loginForm,
    apollo: client.reducer()
  })
}
