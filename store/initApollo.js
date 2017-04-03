import { ApolloClient, createNetworkInterface } from 'react-apollo';

export const initApollo = headers => {
  const client = new ApolloClient({
    ssrMode: !process.browser,
    headers,
    dataIdFromObject: result => result.id || null,
    connectToDevTools: process.browser,
    networkInterface: createNetworkInterface({
      uri: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/graphql'
        : 'https://plate.now.sh/graphql',
      opts: {
        credentials: 'same-origin'
      }
    })
  });
  if (!process.browser) {
    return client;
  } else {
    if (!window.__APOLLO_CLIENT__) {
      window.__APOLLO_CLIENT__ = client;
    }
    return window.__APOLLO_CLIENT__;
  }
};
