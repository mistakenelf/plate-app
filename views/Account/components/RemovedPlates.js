import React, { Component } from 'react'

import DeletePlateDialog from './DeletePlateDialog'
import PropTypes from 'prop-types'
import RecoverPlateDialog from './RecoverPlateDialog'

export default class RemovedPlates extends Component {
  static propTypes = {
    recoverPlates: PropTypes.array,
    addRecoveredPlate: PropTypes.func,
    removeRecoveredPlate: PropTypes.func
  }

  state = {
    recoverDialogOpen: false,
    deleteDialogOpen: false
  }

  openRecoverDialog = () => {
    this.setState({
      recoverDialogOpen: true
    })
  }

  closeRecoverDialog = () => {
    this.setState({
      recoverDialogOpen: false
    })
  }

  openDeleteDialog = () => {
    this.setState({
      deleteDialogOpen: true
    })
  }

  closeDeleteDialog = () => {
    this.setState({
      deleteDialogOpen: false
    })
  }

  render() {
    const {
      recoverPlates,
      addRecoveredPlate,
      removeRecoveredPlate
    } = this.props

    if (recoverPlates.length === 0) {
      return (
        <div>
          <h2 style={{ textAlign: 'center' }}>Recover Plates</h2>
          <h3 style={{ textAlign: 'center' }}>
            <i>You currently have no plates to be recovered.</i>
          </h3>
        </div>
      )
    } else {
      return (
        <div>
          <table style={{ width: '100%', textAlign: 'center' }}>
            <caption>Recover Plates</caption>
            <thead>
              <tr>
                <th>Plate Name</th>
                <th>Recover Plate</th>
                <th>Remove Plate</th>
                <th>Date Deleted</th>
              </tr>
            </thead>
            <tbody>
              {recoverPlates.map((plate, index) => (
                <tr key={index}>
                  <td data-label="name">{plate.name}</td>
                  <td data-label="recover">
                    <button
                      type="button"
                      className="primary"
                      onClick={this.openRecoverDialog}
                    >
                      Recover Plate
                    </button>
                    <RecoverPlateDialog
                      dialogOpen={this.state.recoverDialogOpen}
                      closeDialog={this.closeRecoverDialog}
                      addRecoveredPlate={addRecoveredPlate}
                      removeRecoveredPlate={removeRecoveredPlate}
                      plate={plate}
                    />
                  </td>
                  <td data-label="remove">
                    <button
                      type="button"
                      className="secondary"
                      onClick={this.openDeleteDialog}
                    >
                      Remove Plate
                    </button>
                    <DeletePlateDialog
                      dialogOpen={this.state.deleteDialogOpen}
                      closeDialog={this.closeDeleteDialog}
                      removeRecoveredPlate={removeRecoveredPlate}
                      plateId={plate.id}
                    />
                  </td>
                  <td data-label="date-deleted">
                    {plate.dateDeleted}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
