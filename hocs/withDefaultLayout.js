import React, { Component, PropTypes } from 'react';

import Navigation from '../modules/Navigation';
import configureLoadingProgressBar from '../util/routing';

export default ComposedComponent =>
  class WithDefaultLayout extends Component {
    static propTypes = {
      open: PropTypes.bool,
      openDrawer: PropTypes.func,
      closeDrawer: PropTypes.func
    };

    state = {
      open: false
    };

    componentDidMount() {
      configureLoadingProgressBar();
    }

    openDrawer = () => {
      this.setState({
        open: true
      });
    };

    closeDrawer = () => {
      this.setState({
        open: false
      });
    };

    render() {
      return (
        <div>
          <Navigation
            open={this.state.open}
            openDrawer={this.openDrawer}
            closeDrawer={this.closeDrawer}
          />
          <ComposedComponent {...this.props} />
          <style jsx global>
            {
              `
              * {
                margin: 0;
                box-sizing: border-box;
              }
              body {
                font-family: Roboto, sans-serif;
                margin-top: 60px;
                margin-bottom: 0px;
              }
              `
            }
          </style>
        </div>
      );
    }
  };
