import ApolloClient, { createNetworkInterface } from 'apollo-client'

let apolloClient = null


// Cretae a new ApolloClient
function createClient (headers) {
  return new ApolloClient({
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:4000/graphql',
      opts: {
        credentials: 'same-origin'
        // Pass headers here if your graphql server requires them
      }
    })
  })
}

// Initialize the new ApolloClient taking
// server vs client into account
export const initClient = (headers) => {
  if (!process.browser) {
    return createClient(headers)
  }
  if (!apolloClient) {
    apolloClient = createClient(headers)
  }
  return apolloClient
}
