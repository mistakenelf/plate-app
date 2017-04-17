import { applyMiddleware, compose } from 'redux'

// Create our middleware and setup devtools
const createMiddleware = clientMiddleware => {
  const middleware = applyMiddleware(clientMiddleware)
  if (process.browser && window.devToolsExtension) {
    return compose(middleware, window.devToolsExtension())
  }
  return middleware
}

export default createMiddleware
