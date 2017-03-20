import React, { PropTypes } from "react";

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

NavlessLayout.propTypes = {
  children: PropTypes.node
};

export default NavlessLayout;
