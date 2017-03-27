import React, { PropTypes } from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Animation = props => {
  const { children } = props;

  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={1500}
      >

        {children}
      </ReactCSSTransitionGroup>
      <style jsx global>
        {
          `
          .example-enter {
            transform: translate3d(100%, 0, 0);
          }

          .example-enter.example-enter-active {
            transform: translate3d(0, 0, 0);
            transition: all 300ms;
          }

          .example-leave {
            opacity: 1;
          }

          .example-leave.example-leave-active {
            opacity: 0.01;
            transition: opacity 300ms ease-in;
          }
          .example-appear {
            transform: translate3d(100%, 0, 0);
          }

          .example-appear.example-appear-active {
            transform: translate3d(0, 0, 0);
            transition: all 300ms;
          }
          `
        }
      </style>
    </div>
  );
};

Animation.propTypes = {
  children: PropTypes.node
};

export default Animation;
