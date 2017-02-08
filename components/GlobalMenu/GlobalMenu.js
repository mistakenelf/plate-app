import { inject, observer } from 'mobx-react'

import { Dimmer } from 'semantic-ui-react'
import Link from 'next/prefetch'
import Router from 'next/router'
import { auth } from '../../utils/db'

const logout = (closeMenu) => {
  auth.signOut()
  closeMenu()
  Router.push('/')
}

export default inject('GlobalStore')(observer(({ GlobalStore }) => (
  <div>
    <Dimmer active={GlobalStore.menuOpen}
      onClickOutside={GlobalStore.closeMenu}
      page
    >
      <div className='fade fadeIn'>
        <div className='menu-items'>
          <h1 onClick={GlobalStore.closeMenu}>
            <Link href='/'>
              <a>
                Home
              </a>
            </Link>
          </h1>
          {!GlobalStore.loggedIn &&
            <h1 onClick={GlobalStore.closeMenu}>
              <Link href='/login'>
                <a>
                  Login
                </a>
              </Link>
            </h1>
          }
          {GlobalStore.loggedIn &&
            <h1 onClick={() => logout(GlobalStore.closeMenu)}>
              <a>Logout</a>
            </h1>
          }
          {GlobalStore.loggedIn &&
            <h1 onClick={GlobalStore.closeMenu}>
              <Link href='/dashboard'>
                <a>
                  Dashboard
                </a>
              </Link>
            </h1>
          }
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
        cursor: pointer;
      }

      a:hover {
        color: #00ffff;
        cursor: pointer;
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
