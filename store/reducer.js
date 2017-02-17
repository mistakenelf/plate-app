import { combineReducers } from 'redux'
import drawer from './modules/drawer'
import loginForm from './modules/loginForm'

// Root reducer for our redux store and
// apollo's store
export default function getReducer (client) {
  return combineReducers({
    drawer,
    loginForm,
    apollo: client.reducer()
  })
}
