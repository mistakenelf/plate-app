import Link from 'next/prefetch'
import { Menu } from 'semantic-ui-react'

function UnauthenticatedMenu({ toggleSidebar }) {
  return (
    <div>
      <Menu.Item
        name='home'
        as='div'
        onClick={toggleSidebar}
      >
        <Link href='/'><a>Home</a></Link>
      </Menu.Item>
      <Menu.Item
        name='home'
        as='div'
        onClick={toggleSidebar}
      >
        <Link href='/login'><a>Login</a></Link>
      </Menu.Item>
      <Menu.Item
        name='home'
        as='div'
        onClick={toggleSidebar}
      >
        <Link href='/register'><a>Register</a></Link>
      </Menu.Item>
    </div>
  )
}

export default UnauthenticatedMenu
