import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import rootReducer from './reducers'

const tasks = [
  { "id": 1, "taskName": "Get redux setup" },
  { "id": 2, "taskName": "Start using firebase" }
]

const defaultState = {
  tasks
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store