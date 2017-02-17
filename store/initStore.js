import { applyMiddleware, compose, createStore } from 'redux'

import thunkMiddleware from 'redux-thunk'

let store = null

export const initStore = (rootReducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
  } else {
    if (!store) {
      store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(thunkMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        )
    }
    return store
  }
}
