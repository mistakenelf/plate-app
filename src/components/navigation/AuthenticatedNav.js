import * as firebase from 'firebase'

import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'
import logo from './plateLogo.png'

export default class AuthenticatedNav extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  logout() {
    firebase.auth().signOut()

    .then(() => {
      browserHistory.push('/')
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu size='large' fixed='top' color='teal' inverted fluid>
        <Menu.Item header><img src={logo} alt='plate-logo' /></Menu.Item>
        <Menu.Item
          name='home'
          as={Link}
          to='/'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='dashboard'
          as={Link} to='/dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item onClick={this.logout} name='Logout' />
        </Menu.Menu>
      </Menu>
    )
  }
}
