import AppBar from 'material-ui/AppBar'
import { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { observer } from 'mobx-react'
<<<<<<< HEAD:components/navigation/components/UnauthenticatedNav.js
import store from '../store/store'
import Link from 'next/prefetch'

function activateDrawer() {
  store.menuActive = true
}

function closeDrawer() {
  store.menuActive = false
}
=======
>>>>>>> 4c4a80128720f73c9990a1c85539d5b651ba4b29:modules/navigation/components/UnauthenticatedNav.js

export default observer(({ store }) =>
  <div>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
    <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={store.openDrawer}
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
    <Drawer
      open={store.menuActive}
      onRequestChange={store.closeDrawer}
      docked={false}
      width={200}
    >
      <MenuItem onClick={closeDrawer}><Link href='/register'><a>Register</a></Link></MenuItem>
      <MenuItem>Login</MenuItem>
    </Drawer>
  </div>
)
