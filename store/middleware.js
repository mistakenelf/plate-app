// @flow

import { applyMiddleware, compose } from 'redux';

// Create our middleware and setup devtools
export default function createMiddleware(clientMiddleware) {
  const middleware = applyMiddleware(clientMiddleware);
  if (process.browser && window.devToolsExtension) {
    return compose(middleware, window.devToolsExtension());
  }
  return middleware;
}
