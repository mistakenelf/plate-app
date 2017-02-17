import createMiddleware from './middleware'
import { createStore } from 'redux'
import getReducer from './reducer'

let reduxStore = null

// Initialize our redux store with middleware
export const initStore = (client, initialState) => {
  let store
  if (!process.browser || !reduxStore) {
    const middleware = createMiddleware(client.middleware())
    store = createStore(getReducer(client), initialState, middleware)
    if (!process.browser) {
      return store
    }
    reduxStore = store
  }
  return reduxStore
}
