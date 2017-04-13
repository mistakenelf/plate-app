import React, { Component } from 'react';

import configureLoadingProgressBar from '../utils/routing';

export default ComposedComponent => class WithNavlessLayout extends Component {
  componentDidMount() {
    configureLoadingProgressBar();
  }

  render() {
    return (
      <div>
        <ComposedComponent {...this.props} />
        <style jsx global>
          {`
              * {
                margin: 0;
                box-sizing: border-box;
              }
              a {
                text-decoration: none;
              }
              body {
                font-family: Roboto, sans-serif;
                margin-top: 0px;
                margin-bottom: 0px;
                background: linear-gradient(-90deg, rgb(141, 95, 115), #343f53);
              }
              `}
        </style>
      </div>
    );
  }
};
