import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Link from 'next/prefetch'
import MenuItem from 'material-ui/MenuItem'
import { indigo500 } from 'material-ui/styles/colors'

export default ({ menuOpen, openMenu, closeMenu }) => (
  <div>
    <AppBar
      title='Plate'
      onLeftIconButtonTouchTap={() => openMenu()}
      style={{ backgroundColor: indigo500 }}
    />
    <Drawer
      docked={false}
      width={200}
      open={menuOpen}
      onRequestChange={() => closeMenu()}
    >
      <Link href='/'><a><MenuItem onTouchTap={() => closeMenu()}>Home</MenuItem></a></Link>
      <Link href='/login'><a><MenuItem onTouchTap={() => closeMenu()}>Login</MenuItem></a></Link>
      <Link href='/register'><a><MenuItem onTouchTap={() => closeMenu()}>Register</MenuItem></a></Link>
    </Drawer>
    <style jsx global>{`
      a {
        text-decoration: none;
        text-align: center;
      }
    `}</style>
  </div>
)
