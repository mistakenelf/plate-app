import { browserHistory } from 'react-router'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { syncHistoryWithStore } from 'react-router-redux'

const tasks = [
  { "id": 1, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 2, "taskName": "Start using firebase", "description": "Start using firebase in this project so we can utilize some database features" }
]

const defaultState = {
  tasks
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store