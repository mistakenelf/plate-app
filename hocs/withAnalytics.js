import React, { Component } from 'react';

import { loadGetInitialProps } from 'next/dist/lib/utils';

let ReactGA;
if (process.browser) {
  ReactGA = require('react-ga'); // eslint-disable-line global-require
}

export default ComposedComponent => class WithAnalytics extends Component {
  static async getInitialProps(ctx) {
    return loadGetInitialProps(ComposedComponent, ctx);
  }

  constructor(props) {
    super(props);
    if (process.browser) {
      ReactGA.initialize(ANALYTICS_TRACKING_ID);
    }
  }

  componentDidMount() {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
