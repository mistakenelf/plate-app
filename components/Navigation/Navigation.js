import GlobalMenu from '../GlobalMenu/GlobalMenu'
import Link from 'next/prefetch'
import { Menu } from 'semantic-ui-react'

export default ({ menuOpen, openMenu, closeMenu }) => (
  <div className='nav-bar'>
    <Menu pointing fixed='top'>
      <Link href='/'>
        <a>
          <Menu.Item link>
            <img src='/static/plateLogo.png' />
            <span className='logo-text'>late</span>
          </Menu.Item>
        </a>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item link onClick={openMenu}>
          <span>MENU</span>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <GlobalMenu open={menuOpen} closeMenu={closeMenu} />
    <style jsx>{`
      .logo-text {
        font-size: 20px;
      }
      .nav-bar {
        margin-bottom: 0px;
        padding-bottom: 0px;
      }
    `}</style>
  </div>
)
