import { Dropdown, Menu } from 'semantic-ui-react'
import React, { Component } from 'react'

import { Link } from 'react-router'
import logo from '../assets/plateLogo.png'
import { observer } from 'mobx-react'
import store from '../store/store'

const UnauthenticatedNav =  observer(class AuthenticatedNav extends Component {
  handleItemClick = (e, { name }) => {
    store.activeItem = name
  }

  render() {
    return (
      <Menu size='large' fixed='top' color='teal' inverted fluid>
        <Menu.Item onClick={this.props.toggleSidebar}>
          <img src={logo} alt='plate-logo' />
          <span style={{fontSize: 30}}>late</span>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item text='Account' as={Dropdown} style={{fontSize: 20}}>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
              <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
            </Dropdown.Menu>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
})

export default UnauthenticatedNav
