import { ApolloClient, createNetworkInterface } from 'react-apollo'

let apolloClient = null

function createClient(props) {
  const networkInterface = createNetworkInterface({
    uri: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/graphql'
      : 'https://plate.now.sh/graphql',
    opts: {
      credentials: 'include'
    }
  })

  networkInterface.use([
    {
      applyMiddleware(req, next) {
        /* eslint-disable no-param-reassign */
        if (!req.options.headers) {
          req.options.headers = {}
        }
        req.options.headers['csrf-token'] = props.csrf || null
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
