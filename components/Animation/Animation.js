import React, { PropTypes } from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Animation = props => {
  const { children } = props;

  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >

        {children}
      </ReactCSSTransitionGroup>
      <style jsx global>
        {
          `
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
