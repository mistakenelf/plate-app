import * as firebase from 'firebase'

import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'
import logo from './plateLogo.png'
import { observer } from 'mobx-react'
import store from './store/store'

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
      <Menu size='tiny' fixed='top' color='teal' inverted fluid>
        <Menu.Item header><img src={logo} alt='plate-logo' /></Menu.Item>
        <Menu.Item
          name='home'
          as={Link}
          to='/'
          active={store.activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='dashboard'
          as={Link} to='/dashboard'
          active={store.activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item onClick={this.logout} name='Logout' />
        </Menu.Menu>
      </Menu>
    )
  }
})

export default AuthenticatedNav
