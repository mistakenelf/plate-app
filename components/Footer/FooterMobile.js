import { List, ListItem } from 'material-ui/List'
import React, { Component } from 'react'

import Divider from 'material-ui/Divider'
import ExpandMoreIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import KeyboardArrowRight
  from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import Router from 'next/router'

class FooterMobile extends Component {
  state = {
    quickLinksOpen: false,
    aboutLinksOpen: false
  }

  toggleQuickLinks = () => {
    this.setState({
      quickLinksOpen: !this.state.quickLinksOpen
    })
  }

  toggleAboutLinks = () => {
    this.setState({
      aboutLinksOpen: !this.state.aboutLinksOpen
    })
  }

  render() {
    return (
      <div className="footer-mobile">
        <div>
          <List>
            <ListItem
              primaryText="Quick Links"
              style={{ color: 'white' }}
              onNestedListToggle={this.toggleQuickLinks}
              rightIcon={
                this.state.quickLinksOpen
                  ? <ExpandMoreIcon color="white" />
                  : <KeyboardArrowRight color="white" />
              }
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Terms and Conditions"
                  style={{ color: 'white' }}
                  onTouchTap={() => Router.push('/terms')}
                />,
                <ListItem
                  key={2}
                  primaryText="Meet The Team"
                  style={{ color: 'white' }}
                  onTouchTap={() => Router.push('/team')}
                />
              ]}
            />
            <div className="divider-style">
              <Divider />
            </div>
            <ListItem
              primaryText="Get In Touch"
              style={{ color: 'white' }}
              onNestedListToggle={this.toggleAboutLinks}
              rightIcon={
                this.state.aboutLinksOpen
                  ? <ExpandMoreIcon color="white" />
                  : <KeyboardArrowRight color="white" />
              }
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="About Us"
                  style={{ color: 'white' }}
                  onTouchTap={() => Router.push('/about')}
                />,
                <ListItem
                  key={2}
                  primaryText="Contact Us"
                  style={{ color: 'white' }}
                  onTouchTap={() => Router.push('/contactus')}
                />
              ]}
            />
          </List>
        </div>
        <style jsx>
          {`
            .footer-mobile {
              background-color: #212121;
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
          `}
        </style>
      </div>
    )
  }
}

export default FooterMobile
