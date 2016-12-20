import { browserHistory } from 'react-router'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
