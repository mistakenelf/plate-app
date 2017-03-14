import React, { PropTypes } from "react";

import Navigation from "../../components/Navigation/Navigation";

const Props = {
  children: PropTypes.node,
  open: PropTypes.bool,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
};

export default ({ children, open, openDrawer, closeDrawer }: Props) => (
  <div>
    <style jsx global>
      {
        `
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-family: 'Fira Sans', sans-serif;
        margin-top: 60px;
        margin-bottom: 0px;
      }
    `
      }
    </style>
    <Navigation open={open} openDrawer={openDrawer} closeDrawer={closeDrawer} />
    {children}
  </div>
);
