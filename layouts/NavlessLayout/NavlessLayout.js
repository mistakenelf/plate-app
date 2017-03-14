import React, { PropTypes } from "react";

const propTypes = {
  children: PropTypes.node
};

const NavlessLayout = ({ children }) => (
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
    {children}
  </div>
);

NavlessLayout.propTypes = propTypes;

export default NavlessLayout;
