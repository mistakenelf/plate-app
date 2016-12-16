import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import React, { Component } from 'react'

import { Link } from 'react-router'

export default class AuthenticatedNav extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu size='small' fixed='top' color='violet' inverted fluid>
        <Menu.Item header><Icon name='grid layout' />Plate</Menu.Item>
        <Menu.Item
          name='home'
          as={Link}
          to='/'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item as={Dropdown} text='Login/SignUp'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
              <Dropdown.Item as={Link} to='/signup'>SignUp</Dropdown.Item>
            </Dropdown.Menu>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
