import { List, ListItem } from 'material-ui/List';
import React, { Component } from 'react';

import Divider from 'material-ui/Divider';
import ExpandMoreIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowRight
  from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Router from 'next/router';

class FooterMobile extends Component {
  state = {
    quickLinksOpen: false,
    aboutLinksOpen: false
  };

  toggleQuickLinks = () => {
    this.setState({
      quickLinksOpen: !this.state.quickLinksOpen
    });
  };

  toggleAboutLinks = () => {
    this.setState({
      aboutLinksOpen: !this.state.aboutLinksOpen
    });
  };

  render() {
    return (
      <div className="footer-mobile">
        <div>
          <List>
            <ListItem
              primaryText="Quick Links"
              style={{ color: '#bdbdbd' }}
              onNestedListToggle={this.toggleQuickLinks}
              rightIcon={
                this.state.quickLinksOpen
                  ? <ExpandMoreIcon />
                  : <KeyboardArrowRight />
              }
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Register"
                  style={{ color: '#bdbdbd' }}
                />,
                <ListItem
                  key={2}
                  primaryText="Login"
                  style={{ color: '#bdbdbd' }}
                />
              ]}
            />
            <div className="divider-style">
              <Divider />
            </div>
            <ListItem
              primaryText="About Us"
              style={{ color: '#bdbdbd' }}
              onNestedListToggle={this.toggleAboutLinks}
              rightIcon={
                this.state.aboutLinksOpen
                  ? <ExpandMoreIcon />
                  : <KeyboardArrowRight />
              }
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Register"
                  style={{ color: '#bdbdbd' }}
                />,
                <ListItem
                  key={2}
                  primaryText="Contact Us"
                  style={{ color: '#bdbdbd' }}
                  onTouchTap={() => Router.push('/contact')}
                />
              ]}
            />
          </List>
        </div>
        <style jsx>
          {
            `
            .footer-mobile {
              background-color: #1E2532;
            }
            .divider-style {
              opacity: 0.1;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            @media only screen
            and (min-device-width : 1031px)
            and (max-device-width : 2600px) {
              .footer-mobile {
                display: none;
              }
            }
            `
          }
        </style>
      </div>
    );
  }
}

export default FooterMobile;
