import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://plate-api.azurewebsites.net/api/graphql'
})

export default client
