import React, { Component } from 'react'

import AddPlateDialog from './AddPlateDialog'
import PropTypes from 'prop-types'

export default class AddPlateButton extends Component {
  state = {
    open: false
  }

  openDialog = () => {
    this.setState({
      open: true
    })
  }

  closeDialog = () => {
    this.setState({
      open: false
    })
  }

  static propTypes = {
    user: PropTypes.object
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="add-button large shadowed circular"
          onClick={this.openDialog}
        >
          ＋
        </button>
        <AddPlateDialog
          user={this.props.user}
          open={this.state.open}
          closeDialog={this.closeDialog}
        />
        <style jsx>{`
          .add-button {
            background-color: #E91E63;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}
