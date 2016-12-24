import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'
import React from 'react'

function AuthenticatedMenu({ toggleSidebar }) {
  return (
    <div>
      <Menu.Item
        name='home'
        as={Link}
        to='/'
        onClick={toggleSidebar}
      />
      <Menu.Item
        name='dashboard'
        as={Link} to='/dashboard'
        onClick={toggleSidebar}
      />
    </div>
  )
}

export default AuthenticatedMenu