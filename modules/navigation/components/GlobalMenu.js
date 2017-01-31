import { inject, observer } from 'mobx-react'

import { Dimmer } from 'semantic-ui-react'
import Link from 'next/prefetch'

export default inject('store')(observer(({ store }) => (
  <div>
    <Dimmer active={store.menuOpen}
      onClickOutside={store.closeMenu}
      page
    >
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
          <Link href='/dashboard'>
            <a>
              Dashboard
            </a>
          </Link>
        </h1>
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
    `}</style>
  </div>
)))
