import AppBar from 'material-ui/AppBar'
import { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Link from 'next/prefetch'
import MenuItem from 'material-ui/MenuItem'
import { observer } from 'mobx-react'

export default ({ store }) => (
  <div>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
    <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={store.openModal}
      style={{backgroundColor: 'white'}}
    />
  </div>
)
