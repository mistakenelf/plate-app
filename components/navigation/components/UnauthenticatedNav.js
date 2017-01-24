import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { observer } from 'mobx-react'
import store from '../store/store'
import Link from 'next/prefetch'

function activateDrawer() {
  store.menuActive = true
}

function closeDrawer() {
  store.menuActive = false
}

export default observer(() =>
  <div>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
    <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={activateDrawer}
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
    <Drawer
      open={store.menuActive}
      onRequestChange={closeDrawer}
      docked={false}
      width={200}
    >
      <MenuItem onClick={closeDrawer}><Link href='/register'><a>Register</a></Link></MenuItem>
      <MenuItem>Login</MenuItem>
    </Drawer>
  </div>
)