import { inject, observer } from 'mobx-react'

import { Dimmer } from 'semantic-ui-react'

export default inject('store')(observer(({ store }) => (
  <div>
    <Dimmer active={store.menuOpen}
      onClickOutside={store.closeMenu}
      page
    >
      <div className='menu-items'>
        <h1>Home</h1>
        <h1>Login</h1>
        <h1>Dashboard</h1>
      </div>
    </Dimmer>
    <style jsx>{`
      .menu-items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)))
