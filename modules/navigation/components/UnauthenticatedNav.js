import AppBar from 'material-ui/AppBar'
import { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { observer } from 'mobx-react'
import Link from 'next/prefetch'

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
      <Link href='/register'><a><MenuItem onClick={store.closeDrawer}>Register</MenuItem></a></Link>
      <MenuItem>Login</MenuItem>
    </Drawer>
  </div>
)
