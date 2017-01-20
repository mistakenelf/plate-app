import { Dropdown, Menu } from 'semantic-ui-react'
import React, { Component } from 'react'

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
          <img src='/static/plateLogo.png' alt='plate-logo' />
          <span style={{fontSize: 30}}>late</span>
        </Menu.Item>
      </Menu>
    )
  }
})

export default UnauthenticatedNav