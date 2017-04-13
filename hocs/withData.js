import 'isomorphic-fetch';
import '../utils/tap_events';
import '../utils/offline_install';

import { ApolloProvider, getDataFromTree } from 'react-apollo';
import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { initApollo } from '../store/initApollo';
import { initStore } from '../store/initStore';
import { loadGetInitialProps } from 'next/dist/lib/utils';

export default ComposedComponent => class WithData extends Component {
  static propTypes = {
    headers: PropTypes.object,
    initialState: PropTypes.object,
    userAgent: PropTypes.string
  };

  static async getInitialProps(ctx) {
    const { req } = ctx;
    const headers = ctx.req ? ctx.req.headers : {};
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const apolloClient = initApollo(headers);
    const reduxStore = initStore(apolloClient, apolloClient.initialState);
    const subProps = await loadGetInitialProps(ComposedComponent, ctx);

    const props = {
      url: { query: ctx.query, pathname: ctx.pathname },
      ...subProps
    };

    if (!process.browser) {
      await getDataFromTree(
        <ApolloProvider client={apolloClient} store={reduxStore}>
          <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
            <ComposedComponent {...props} />
          </MuiThemeProvider>
        </ApolloProvider>
      );
    }

    const state = reduxStore.getState();

    return {
      initialState: {
        ...state,
        apollo: {
          data: apolloClient.getInitialState().data
        }
      },
      headers,
      userAgent,
      ...props
    };
  }

  constructor(props) {
    super(props);
    this.apolloClient = initApollo(props.headers);
    this.reduxStore = initStore(this.apolloClient, props.initialState);
  }

  render() {
    return (
      <ApolloProvider client={this.apolloClient} store={this.reduxStore}>
        <MuiThemeProvider
          muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}
        >
          <ComposedComponent {...this.props} />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
};
