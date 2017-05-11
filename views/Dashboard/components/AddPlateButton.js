import { injectState, provideState } from 'freactal'

import AddPlateDialog from './AddPlateDialog'
import PropTypes from 'prop-types'
import React from 'react'

const wrapComponentWithState = provideState({
  initialState: () => ({
    open: false
  }),
  effects: {
    openDialog: () => state => Object.assign({}, state, { open: true }),
    closeDialog: () => state => Object.assign({}, state, { open: false })
  }
})

const AddPlateButton = wrapComponentWithState(
  injectState(({ state, effects, user }) => {
    return (
      <div>
        <input
          type="button"
          className="primary"
          value="Add Plate"
          onClick={effects.openDialog}
        />
      </div>
    )
  })
)

AddPlateButton.propTypes = {
  user: PropTypes.object
}

export default AddPlateButton
