import { Card, CardHeader } from "material-ui/Card";
import { List, ListItem } from "material-ui/List";

import Avatar from "material-ui/Avatar";
import EmailIcon from "material-ui/svg-icons/communication/email";
import PhoneIcon from "material-ui/svg-icons/communication/call";
import React from "react";

export default () => (
  <div className="container">
    <div
      className="row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg"
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <Avatar src="/static/img/aleximage.jpg" size={200} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
        <Card style={{ width: "300px", marginBottom: "20px" }}>
          <CardHeader title="Contact Information" />
          <List>
            <ListItem primaryText="Inbox" leftIcon={<EmailIcon />} />
            <ListItem primaryText="Starred" leftIcon={<EmailIcon />} />
            <ListItem primaryText="Sent mail" leftIcon={<EmailIcon />} />
            <ListItem primaryText="Drafts" leftIcon={<EmailIcon />} />
            <ListItem primaryText="Inbox" leftIcon={<EmailIcon />} />
          </List>
        </Card>
        <Card style={{ width: "300px" }}>
          <List>
            <ListItem
              leftIcon={<PhoneIcon />}
              primaryText="(650) 555 - 1234"
              secondaryText="Mobile"
            />
            <ListItem
              leftIcon={<PhoneIcon />}
              primaryText="(323) 555 - 6789"
              secondaryText="Work"
            />
          </List>
        </Card>
      </div>
    </div>
    <style jsx>
      {
        `
      .container {
        display: flex;
        justify-content: center;
        margin-top: 100px;
      }
        `
      }
    </style>
  </div>
);
