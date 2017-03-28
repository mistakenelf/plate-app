import React, { PropTypes } from "react";

const NavlessLayout = props => {
  return (
    <div>
      <style jsx global>
        {
          `
          * {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            background-image: url('/static/img/plateGradient.png');
            font-family: 'Fira Sans', sans-serif;
          }
        `
        }
      </style>
      {props.children}
    </div>
  );
};

NavlessLayout.propTypes = {
  children: PropTypes.node
};

export default NavlessLayout;
