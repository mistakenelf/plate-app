import { combineReducers } from 'redux'
import plates from './plates'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  plates,
  routing: routerReducer
})

export default rootReducer
