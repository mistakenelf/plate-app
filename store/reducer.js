import { client } from './initClient'
import { combineReducers } from 'redux'
import drawer from './modules/drawer'
import loginForm from './modules/loginForm'

export default combineReducers({
  drawer,
  loginForm,
  apollo: client.reducer()
})
