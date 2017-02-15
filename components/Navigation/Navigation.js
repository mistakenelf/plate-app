import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import Link from 'next/prefetch'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { indigo500 } from 'material-ui/styles/colors'

export default ({ menuOpen, openMenu, closeMenu }) => {
  const elementRight = (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Link href='/login'><a><MenuItem onTouchTap={() => closeMenu()}>Login</MenuItem></a></Link>
      <Link href='/register'><a><MenuItem onTouchTap={() => closeMenu()}>Register</MenuItem></a></Link>
    </IconMenu>
  )

  return (
    <div>
      <AppBar
        title='Plate'
        onLeftIconButtonTouchTap={() => openMenu()}
        iconElementRight={elementRight}
        style={{ backgroundColor: indigo500 }}
      />
      <Drawer
        docked={false}
        width={200}
        open={menuOpen}
        onRequestChange={() => closeMenu()}
      >
        <Link href='/'><a><MenuItem onTouchTap={() => closeMenu()}>Home</MenuItem></a></Link>
      </Drawer>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
