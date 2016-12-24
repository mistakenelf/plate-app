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
      <Menu size='small' fixed='top' color='teal' borderless inverted fluid>
        <Menu.Item><img src={logo} alt='plate-logo' /></Menu.Item>
        <Menu.Item
          name='home'
          as={Link}
          to='/'
          active={store.activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item as={Dropdown} text='Account'>
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
