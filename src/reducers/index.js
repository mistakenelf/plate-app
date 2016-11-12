import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import tasks from './tasks'

const rootReducer = combineReducers({
  tasks,
  routing: routerReducer
})

export default rootReducer