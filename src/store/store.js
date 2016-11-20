import { browserHistory } from 'react-router'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { syncHistoryWithStore } from 'react-router-redux'

const tasks = [
  { "id": 1, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 2, "taskName": "Start using firebase", "description": "Start using firebase in this project so we can utilize some database features" },
  { "id": 3, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 4, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 5, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 6, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 7, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 8, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 9, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 10, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },
  { "id": 11, "taskName": "Get redux setup", "description": "Use redux so we have one large store of data that we can use throughout the app" },

]

const defaultState = {
  tasks
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
