import React, { Component } from 'react'

import AddPlateDialog from './AddPlateDialog'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import PropTypes from 'prop-types'

class AddPlateButton extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  state = {
    open: false
  }

  closeDialog = () => {
    this.setState({
      open: false
    })
  }

  openDialog = () => {
    this.setState({
      open: true
    })
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          style={{ marginRight: 10, marginBottom: 10 }}
          secondary={true}
          onTouchTap={this.openDialog}
        >
          <ContentAdd />
        </FloatingActionButton>
        <AddPlateDialog
          open={this.state.open}
          closeDialog={this.closeDialog}
          user={this.props.user}
        />
      </div>
    )
  }
}

export default AddPlateButton
