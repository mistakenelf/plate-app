import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import store from './store/store'

const Navigation = observer(class Navigation extends Component {

  activateDrawer = () => {
    store.menuActive = true
  }

  render() {
    return (
      <div>
        <AppBar
          title="Plate"
          onRightIconButtonTouchTap={this.activateDrawer}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer open={store.menuActive}>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
        </Drawer>
      </div>
    )
  }

})

export default Navigation





