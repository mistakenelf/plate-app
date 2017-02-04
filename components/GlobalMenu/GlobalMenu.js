import { inject, observer } from 'mobx-react'

import { Dimmer } from 'semantic-ui-react'
import Link from 'next/prefetch'
import Router from 'next/router'
import { auth } from '../../lib/db'

const logout = (closeMenu) => {
  auth.signOut()
  closeMenu()
  Router.push('/')
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
          {store.loggedIn &&
            <h1 onClick={() => logout(store.closeMenu)}>
              Logout
            </h1>
          }
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
