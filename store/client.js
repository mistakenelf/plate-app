import { ApolloClient, createNetworkInterface } from 'react-apollo'

import cookie from 'react-cookie'

let apolloClient = null

function createClient() {
  const networkInterface = createNetworkInterface({
    uri: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/graphql'
      : 'https://plate.now.sh/graphql',
    opts: {
      credentials: 'same-origin'
    }
  })

  networkInterface.use([
    {
      applyMiddleware(req, next) {
        /* eslint-disable no-param-reassign */
        if (!req.options.headers) {
          req.options.headers = {}
        }
        req.options.headers.authorization = cookie.load('token') || null
        /* eslint-enable no-param-reassign */
        next()
      }
    }
  ])

  return new ApolloClient({
    networkInterface,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    connectToDevTools: process.browser
  })
}

export default function getClient(props) {
  let client
  if (!process.browser || !apolloClient) {
    client = createClient(props)
    if (!process.browser) {
      return client
    }
    apolloClient = client
  }
  return apolloClient
}
