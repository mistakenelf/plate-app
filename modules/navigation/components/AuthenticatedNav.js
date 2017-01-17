import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'
import Router from 'next/router'
import { observer } from 'mobx-react'
import store from '../store/store'

const AuthenticatedNav = observer(class AuthenticatedNav extends Component {
  handleItemClick = (e, { name }) => {
    store.activeItem = name
  }

  logout() {
    store.loggedIn = false
    Router.push('/')
  }

  render() {
    return (
      <Menu size='large' fixed='top' color='teal' inverted fluid>
        <Menu.Item onClick={this.props.toggleSidebar}>
          <img src='/static/plateLogo.png' alt='plate-logo' />
          <span style={{fontSize: 30}}>late</span>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={this.logout}>
            <span style={{fontSize: 20}}>Logout</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
})

export default AuthenticatedNav
