import AppBar from 'material-ui/AppBar'
import { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { observer } from 'mobx-react'
import Link from 'next/prefetch'
import Modal from '../../../components/modal/Modal'

export default observer(({ store }) =>
  <div>
    <style jsx>{` 
      a {
        text-decoration: none;
      }
    `}</style>
    {store.modalOpen
    ? <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={store.openModal}
      style={{display: 'none'}}
    />
    : <AppBar 
      title='Plate'
      onLeftIconButtonTouchTap={store.openModal}
      style={{backgroundColor: 'white'}}
    />
    }
    <Modal open={store.modalOpen} />
  </div>
)
