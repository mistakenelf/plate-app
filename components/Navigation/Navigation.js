import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Link from 'next/prefetch'
import MenuItem from 'material-ui/MenuItem'

export default ({ menuOpen, openMenu, closeMenu }) => (
  <div>
    <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={() => openMenu()}
    />
    <Drawer
      docked={false}
      width={200}
      open={menuOpen}
      onRequestChange={() => closeMenu()}
    >
      <Link href='/login'><a><MenuItem onTouchTap={() => closeMenu()}>Login</MenuItem></a></Link>
      <Link href='/register'><a><MenuItem onTouchTap={() => closeMenu()}>Register</MenuItem></a></Link>
    </Drawer>
  </div>
)
