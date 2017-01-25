import AppBar from 'material-ui/AppBar'
import { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Link from 'next/prefetch'
import MenuItem from 'material-ui/MenuItem'
import Modal from '../../../components/modal/Modal'
import { observer } from 'mobx-react'

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
    <Modal open={store.modalOpen} closeModal={store.closeModal} />
  </div>
)
