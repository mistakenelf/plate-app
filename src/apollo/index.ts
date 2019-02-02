import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://plate-api.azurewebsites.net/api/graphql'
      : 'http://localhost:5000/api/graphql'
})

export default client
