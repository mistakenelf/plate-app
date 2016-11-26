import { browserHistory } from 'react-router'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { syncHistoryWithStore } from 'react-router-redux'

let plates = []

const defaultState = {
  plates
}

const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
