import AppBar from 'material-ui/AppBar'
import { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { observer } from 'mobx-react'

export default observer(({ store }) =>
  <div>
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
      <MenuItem>Register</MenuItem>
      <MenuItem>Login</MenuItem>
    </Drawer>
  </div>
)
