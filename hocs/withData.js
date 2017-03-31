import 'isomorphic-fetch';
import '../util/tap_events';

import { ApolloProvider, getDataFromTree } from 'react-apollo';
import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { initApollo } from '../store/initApollo';
import { initStore } from '../store/initStore';

export default Component =>
  class extends React.Component {
    static propTypes = {
      headers: PropTypes.object,
      initialState: PropTypes.object,
      userAgent: PropTypes.string
    };

    static async getInitialProps(ctx) {
      const { req } = ctx;
      const headers = ctx.req ? ctx.req.headers : {};

      // Need the user agent for MuiThemeProvider when rendered on the
      // server vs client
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

      // Initialize apollo client
      const client = initApollo(headers);

      // Setup redux store
      const store = initStore(client, client.initialState);

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...(await (Component.getInitialProps
          ? Component.getInitialProps(ctx)
          : {}))
      };

      // Were rendering on the server
      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
              <Component {...props} />
            </MuiThemeProvider>
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      const state = store.getState();

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data
          }
        },
        headers,
        userAgent,
        ...props
      };
    }

    constructor(props) {
      super(props);
      this.client = initApollo(props.headers);
      this.store = initStore(this.client, props.initialState);
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <MuiThemeProvider
            muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}
          >
            <Component {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      );
    }
  };
