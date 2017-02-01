import { inject, observer } from 'mobx-react'

import { Dimmer } from 'semantic-ui-react'
import Link from 'next/prefetch'
import { auth } from '../../lib/db'

const logout = () => {
  auth.signOut()
}

export default inject('store')(observer(({ store }) => (
  <div>
    <Dimmer active={store.menuOpen}
      onClickOutside={store.closeMenu}
      page
    >
      <div className='fade fadeIn'>
        <div className='menu-items'>
          <h1 onClick={store.closeMenu}>
            <Link href='/'>
              <a>
                Home
              </a>
            </Link>
          </h1>
          <h1 onClick={store.closeMenu}>
            <Link href='/login'>
              <a>
                Login
              </a>
            </Link>
          </h1>
          <h1 onClick={store.closeMenu}>
            <Link href='#'>
              <a onClick={logout}>
                Logout
              </a>
            </Link>
          </h1>
          <h1 onClick={store.closeMenu}>
            <Link href='/dashboard'>
              <a>
                Dashboard
              </a>
            </Link>
          </h1>
        </div>
      </div>
    </Dimmer>
    <style jsx>{`
      .menu-items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
      }

      a:hover {
        color: #00ffff;
      }

      .fade {
        animation-duration: 500ms;
        animation-fill-mode: both;
      }

      @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 0.8;}
      }

      .fadeIn {
        animation-name: fadeIn;
      }
    `}</style>
  </div>
)))
