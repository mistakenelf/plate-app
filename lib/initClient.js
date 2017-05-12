import { ApolloClient, createBatchingNetworkInterface } from 'react-apollo'

import Cookies from 'js-cookie'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function _initClient(headers, initialState) {
  const networkInterface = createBatchingNetworkInterface({
    uri: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/graphql'
      : 'https://platemate.io/graphql',
    batchInterval: 10,
    opts: {
      credentials: 'include'
    }
  })

  networkInterface.use([
    {
      applyBatchMiddleware(req, next) {
        /* eslint-disable no-param-reassign */
        if (!req.options.headers) {
          req.options.headers = {}
        }
        req.options.headers.authorization = Cookies.get('token') || null
        /* eslint-enable no-param-reassign */
        next()
      }
    }
  ])

  return new ApolloClient({
    initialState,
    networkInterface,
    queryDeduplication: true,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    connectToDevTools: process.browser
  })
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState)
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState)
  }
  return apolloClient
}
