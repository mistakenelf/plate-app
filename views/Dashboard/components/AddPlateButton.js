import React, { Component } from 'react'

import AddPlateDialog from './AddPlateDialog'
import PropTypes from 'prop-types'

class AddPlateButton extends Component {
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
          className="tertiary large shadowed circular"
          onClick={this.openDialog}
        >
          ＋
        </button>
        <AddPlateDialog
          user={this.props.user}
          open={this.state.open}
          closeDialog={this.closeDialog}
        />
      </div>
    )
  }
}

export default AddPlateButton
