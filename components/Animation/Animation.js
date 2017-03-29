import React, { Component, PropTypes } from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Animation extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionLeave={false}
          transitionEnter={false}
        >
          {this.props.children}
        </ReactCSSTransitionGroup>
        <style jsx global>
          {
            `
            .example-appear {
              opacity: 0.01;
            }
            .example-appear.example-appear-active {
              opacity: 1;
              transition: opacity 1s ease-in;
            }
            `
          }
        </style>
      </div>
    );
  }
}
