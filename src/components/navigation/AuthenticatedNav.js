import * as firebase from 'firebase'

import {
  Arrow,
  Dropdown,
  DropdownMenu,
  Fixed,
  NavItem,
  Space,
  Toolbar,
} from 'rebass'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

export default class AuthenticatedNav extends Component {
  constructor() {
    super()

    this.state = {
      dropdownOpen: false
    }
  }

  logout() {
    firebase.auth().signOut().then(() => {
      browserHistory.push('/')
    }, (error) => {
      console.log('Log out failed')
    })
  }

  toggleDropdown() {
    if (this.state.dropdownOpen === false) {
      this.setState({
        dropdownOpen: true
      })
    } else {
      this.setState({
        dropdownOpen: false
      })
    }
  }

  render() {
    const navColor = {
      backgroundColor: 'white',
      color: 'black'
    }

    return (
      <Fixed top left right zIndex={1}>
        <Toolbar style={navColor}>
          <NavItem is={Link} to={'/'}>
            Plate
          </NavItem>
          <NavItem is={Link} to={'/dashboard'}>
            Dashboard
          </NavItem>
          <Space
            auto
            x={1}
            />
          <NavItem is='a'>
            <Dropdown
              onClick={this.toggleDropdown.bind(this)}
              >
              Logout
              <Arrow direction='down' />
              <DropdownMenu
                open={this.state.dropdownOpen}
                right
                onDismiss={this.toggleDropdown.bind(this)}
                >
                <NavItem is='a' onClick={this.logout}>
                  Logout
                </NavItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Toolbar>
      </Fixed>
    )
  }
}
