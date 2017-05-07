import { injectState, provideState } from 'freactal'

import AddPlateDialog from './AddPlateDialog'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
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
        <FloatingActionButton
          style={{ marginRight: 10, marginBottom: 10 }}
          secondary={true}
          onTouchTap={effects.openDialog}
        >
          <ContentAdd />
        </FloatingActionButton>
        <AddPlateDialog
          open={state.open}
          closeDialog={effects.closeDialog}
          user={user}
        />
      </div>
    )
  })
)

AddPlateButton.propTypes = {
  user: PropTypes.object
}

export default AddPlateButton
