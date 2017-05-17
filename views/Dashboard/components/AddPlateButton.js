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
        <button
          type="button"
          className="secondary shadowed circular"
          onClick={effects.openDialog}
        >
          ＋
        </button>
        <AddPlateDialog
          user={user}
          open={state.open}
          closeDialog={effects.closeDialog}
        />
      </div>
    )
  })
)

AddPlateButton.propTypes = {
  user: PropTypes.object
}

export default AddPlateButton
