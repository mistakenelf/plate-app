import React, { Component } from 'react'

import Icon from '../../../components/Icon/Icon'
import PropTypes from 'prop-types'

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
        <Icon type="fa fa-cog" style={{ fontSize: 20, color: '#424242' }} />
        <style jsx>{`
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
        `}</style>
      </div>
    )
  }
}

export default Header
