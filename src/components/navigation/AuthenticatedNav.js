import * as firebase from 'firebase'

import { Link, browserHistory } from 'react-router'
import { MenuItem, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import React from 'react'

function logout() {
    firebase.auth().signOut().then(() => {
      browserHistory.push('/')
    }, (error) => {
      console.log('Log out failed')
    })
  }

function AuthenticatedNav() {
  return (
    <Navbar inverse collapseOnSelect fluid fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Plate</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Logout" id="basic-nav-dropdown">
            <MenuItem onClick={logout} eventKey={3.1}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AuthenticatedNav

