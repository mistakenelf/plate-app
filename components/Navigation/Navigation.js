import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import AppBar from 'material-ui/AppBar'
import Cookies from 'js-cookie'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import Link from 'next/link'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import PropTypes from 'prop-types'
import React from 'react'

const logout = () => {
  Cookies.remove('token')
  window.location.href = '/login'
}

const Navigation = ({ open, openDrawer, closeDrawer, token }) => {
  const elementRight = (
    <div>
      {token &&
        <Link prefetch href="/account">
          <a>
            <AccountIcon
              style={{ color: 'white', cursor: 'pointer' }}
              hoverColor="#B0BEC5"
            />
          </a>
        </Link>}
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        iconStyle={{ color: 'white' }}
      >
        {token
          ? <a onTouchTap={() => logout()}><MenuItem>Logout</MenuItem></a>
          : <div>
              <Link prefetch href="/login">
                <a><MenuItem>Login</MenuItem></a>
              </Link>
              <Link prefetch href="/register">
                <a><MenuItem>Register</MenuItem></a>
              </Link>
            </div>}
      </IconMenu>
    </div>
  )

  return (
    <div>
      <AppBar
        title="Plate"
        onLeftIconButtonTouchTap={openDrawer}
        iconElementRight={elementRight}
        style={{
          backgroundColor: '#343f53',
          position: 'fixed',
          height: 60,
          top: 0
        }}
      />
      <Drawer
        docked={false}
        width={200}
        open={open}
        onRequestChange={closeDrawer}
      >
        <Link prefetch href="/">
          <a className="sidebar-text">
            <MenuItem onTouchTap={closeDrawer}>Home</MenuItem>
          </a>
        </Link>
        {token &&
          <Link prefetch href="/dashboard">
            <a className="sidebar-text">
              <MenuItem onTouchTap={closeDrawer}>
                Dashboard
              </MenuItem>
            </a>
          </Link>}
      </Drawer>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          .sidebar-text {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

Navigation.propTypes = {
  open: PropTypes.bool,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  client: PropTypes.object,
  token: PropTypes.string
}

export default Navigation
