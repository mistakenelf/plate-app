import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'
import { indigo500 } from 'material-ui/styles/colors'
import { IndexLink, Link } from 'react-router'

export default class Navigation extends Component {
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

  render() {
    const styles = {
      appBarColor: {
        backgroundColor: indigo500
      }
    }

    return (
      <div>
        <AppBar
          title="Spendy"
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
              <Link to="/login"><MenuItem primaryText="Login" /></Link>
              <Link to="/register"><MenuItem primaryText="Register" /></Link>
            </IconMenu>
          } />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open }) }
          >
          <IndexLink to="/"><MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem></IndexLink>
          <Link to="/account"><MenuItem onTouchTap={this.handleClose.bind(this)}>Account</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}
