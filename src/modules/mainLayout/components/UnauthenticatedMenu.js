import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'
import React from 'react'

function UnauthenticatedMenu({ toggleSidebar }) {
  return (
    <div>
      <Menu.Item
        name='home'
        as={Link}
        to='/'
        onClick={toggleSidebar}
      />
    </div>
  )
}

export default UnauthenticatedMenu