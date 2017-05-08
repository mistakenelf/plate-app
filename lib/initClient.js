import { ApolloClient, createBatchingNetworkInterface } from 'react-apollo'

import Cookies from 'js-cookie'

let apolloClient = null

function _initClient(headers, initialState) {
  const networkInterface = createBatchingNetworkInterface({
    uri: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/graphql'
      : 'https://plate.now.sh/graphql',
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
