import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'
import { indigo500 } from 'material-ui/styles/colors'
import { IndexLink, Link } from 'react-router'
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'

export default class AuthenticatedNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  logout() {
    firebase.auth().signOut().then(() => {
      console.log('Signed out')
      browserHistory.push('/')
    }, (error) => {
      console.log('Log out failed')
    })
  }

  render() {
    const styles = {
      appBarColor: {
        backgroundColor: indigo500,
      }
    }

    return (
      <div>
        <AppBar
          title="Plate"
          style={styles.appBarColor}
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Logout" onClick={this.logout} />
            </IconMenu>
          } />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open }) }
          >
          <MenuItem containerElement={ <IndexLink to="/" /> } onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
          <MenuItem containerElement={ <Link to="/dashboard" /> } onTouchTap={this.handleClose.bind(this)}>Dashboard</MenuItem>
        </Drawer>
      </div>
    )
  }
}
