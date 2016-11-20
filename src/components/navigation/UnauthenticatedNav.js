import { MenuItem, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import React from 'react'

function UnauthenticatedNav() {
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
          <NavDropdown eventKey={3} title="Login/Register" id="basic-nav-dropdown">
            <LinkContainer to="/Login">
              <MenuItem eventKey={3.1}>Login</MenuItem>
            </LinkContainer>
            <LinkContainer to="/register">
              <MenuItem eventKey={3.2}>Register</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UnauthenticatedNav
