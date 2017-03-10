import { List, ListItem } from "material-ui/List";

import Divider from "material-ui/Divider";
import React from "react";

export default () => (
  <div className="footer-mobile-main">
    <List>
      <ListItem primaryText="Quick Links" style={{ color: "#bdbdbd" }} />
      <div className="divider-style">
        <Divider />
      </div>
      <ListItem primaryText="Contact Us" style={{ color: "#bdbdbd" }} />
    </List>
    <style jsx>
      {
        `
        .footer-mobile-main {
          background-color: #1E2532;
          margin: 30px;
        }
        .divider-style {
          opacity: 0.2;
          margin-top: 5px;
          margin-bottom: 5px;
        }
    `
      }
    </style>
  </div>
);
