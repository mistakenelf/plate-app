import { injectState, provideState } from 'freactal'

import DeletePlateDialog from './DeletePlateDialog'
import PropTypes from 'prop-types'
import React from 'react'
import RecoverPlateDialog from './RecoverPlateDialog'

const wrapComponentWithState = provideState({
  initialState: () => ({
    recoverDialogOpen: false,
    deleteDialogOpen: false
  }),
  effects: {
    openRecoverDialog: () => state =>
      Object.assign({}, state, { recoverDialogOpen: true }),
    closeRecoverDialog: () => state =>
      Object.assign({}, state, { recoverDialogOpen: false }),
    openDeleteDialog: () => state =>
      Object.assign({}, state, { deleteDialogOpen: true }),
    closeDeleteDialog: () => state =>
      Object.assign({}, state, { deleteDialogOpen: false })
  }
})

const RemovedPlates = wrapComponentWithState(
  injectState(
    ({
      state,
      effects,
      recoverPlates,
      addRecoveredPlate,
      removeRecoveredPlate
    }) => {
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
                        onClick={effects.openRecoverDialog}
                      >
                        Recover Plate
                      </button>
                      <RecoverPlateDialog
                        dialogOpen={state.recoverDialogOpen}
                        closeDialog={effects.closeRecoverDialog}
                        addRecoveredPlate={addRecoveredPlate}
                        removeRecoveredPlate={removeRecoveredPlate}
                        plate={plate}
                      />
                    </td>
                    <td data-label="remove">
                      <button
                        type="button"
                        className="secondary"
                        onClick={effects.openDeleteDialog}
                      >
                        Remove Plate
                      </button>
                      <DeletePlateDialog
                        dialogOpen={state.deleteDialogOpen}
                        closeDialog={effects.closeDeleteDialog}
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
  )
)

RemovedPlates.propTypes = {
  recoverPlates: PropTypes.array,
  addRecoveredPlate: PropTypes.func,
  removeRecoveredPlate: PropTypes.func
}

export default RemovedPlates
