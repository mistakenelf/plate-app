import { List, ListItem } from "material-ui/List";

import Divider from "material-ui/Divider";
import React from "react";

export default () => (
  <div className="footer-mobile-main">
    <List>
      <ListItem
        primaryText="Quick Links"
        style={{ color: "#bdbdbd" }}
        primaryTogglesNestedList
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Register"
            style={{ color: "#bdbdbd" }}
          />,
          <ListItem key={2} primaryText="Login" style={{ color: "#bdbdbd" }} />
        ]}
      />
      <div className="divider-style">
        <Divider />
      </div>
      <ListItem
        primaryText="About Us"
        style={{ color: "#bdbdbd" }}
        primaryTogglesNestedList
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Register"
            style={{ color: "#bdbdbd" }}
          />,
          <ListItem
            key={2}
            primaryText="Contact Us"
            style={{ color: "#bdbdbd" }}
          />
        ]}
      />
    </List>
    <style jsx>
      {
        `
        .footer-mobile-main {
          background-color: #2E3644;
        }
        .divider-style {
          opacity: 0.1;
          margin-top: 5px;
          margin-bottom: 5px;
        }
    `
      }
    </style>
  </div>
);
