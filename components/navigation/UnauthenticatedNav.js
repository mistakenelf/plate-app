import { inject, observer } from 'mobx-react'

import Link from 'next/prefetch'
import { Menu } from 'semantic-ui-react'
import Register from '../register/Register'

export default inject('store')(observer(({ store }) => (
  <div>
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
        <Menu.Item onClick={store.openModal} link>
          <span>Register</span>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Register />
    <style jsx>{`
      .logo-text {
        font-size: 20px;
      }
    `}</style>
  </div>
)))
