import { combineReducers } from 'redux'
import drawer from './modules/drawer'

// Root reducer for our redux store and
// apollo's store
export default function getReducer (client) {
  return combineReducers({
    drawer,
    apollo: client.reducer()
  })
}
