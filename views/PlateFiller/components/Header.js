import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Popover from 'material-ui/Popover'
import PropTypes from 'prop-types'
import Settings from 'material-ui/svg-icons/action/settings'

class Header extends Component {
  static propTypes = {
    plateName: PropTypes.string
  }

  state = {
    open: false
  }

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { plateName } = this.props
    return (
      <div className="header-container">
        <div className="header">{plateName.toUpperCase()}</div>
        <IconButton tooltip="Plate Settings" onTouchTap={this.handleTouchTap}>
          <Settings color="#424242" />
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Share" />
            <MenuItem primaryText="Settings" />
          </Menu>
        </Popover>
        <style jsx>
          {`
          .header-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 4px solid #eee;
            margin-bottom: 20px;
            justify-content: space-between;
          }
          .header {
            font-size: 35px;
            margin-top: 15px;
            margin-bottom: 15px;
            color: #424242;
            font-weight: bolder;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Header
