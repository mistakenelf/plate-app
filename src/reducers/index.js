import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tasks from './tasks'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  tasks,
  toastr: toastrReducer,
  routing: routerReducer
})

export default rootReducer
