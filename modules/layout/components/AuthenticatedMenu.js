import Link from 'next/prefetch'
import { Menu } from 'semantic-ui-react'

function AuthenticatedMenu({ toggleSidebar }) {
  return (
    <div>
      <Menu.Item
        name='home'
        as="div"
        onClick={toggleSidebar}
      >
        <Link href='/'><a>Home</a></Link>
      </Menu.Item>
      <Menu.Item
        name='dashboard'
        onClick={toggleSidebar}
      >
        <Link href='/dashboard'><a>Dashboard</a></Link>
      </Menu.Item>
    </div>
  )
}

export default AuthenticatedMenu
