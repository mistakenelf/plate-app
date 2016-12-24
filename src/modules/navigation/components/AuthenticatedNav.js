import * as firebase from 'firebase'

import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import logo from '../assets/plateLogo.png'
import { observer } from 'mobx-react'
import store from '../store/store'

const AuthenticatedNav = observer(class AuthenticatedNav extends Component {
  handleItemClick = (e, { name }) => {
    store.activeItem = name
  }

  logout() {
    firebase.auth().signOut()

    .then(() => {
      browserHistory.push('/')
    })
  }

  render() {
    return (
      <Menu size='large' fixed='top' color='teal' borderless inverted fluid>
        <Menu.Item onClick={this.props.toggleSidebar}><img src={logo} alt='plate-logo' /></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={this.logout} name='Logout' />
        </Menu.Menu>
      </Menu>
    )
  }
})

export default AuthenticatedNav
