import { browserHistory } from 'react-router'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { syncHistoryWithStore } from 'react-router-redux'

let plates = []

const defaultState = {
  plates
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
