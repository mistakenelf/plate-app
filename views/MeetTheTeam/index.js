import { injectState, provideState } from 'freactal'

import React from 'react'
import TestModal from '../../components/TestModal/TestModal'

const wrapComponentWithState = provideState({
  initialState: () => ({
    displayModal: false
  }),
  effects: {
    openModal: () => state => Object.assign({}, state, { displayModal: true }),
    closeModal: () => state => Object.assign({}, state, { displayModal: false })
  }
})

const MeetTheTeam = wrapComponentWithState(
  injectState(({ state, effects }) => {
    return (
      <div>
        <button
          label="Primary"
          primary
          onTouchTap={effects.openModal}
          style={{ marginTop: 80 }}
        />
        {state.displayModal && <TestModal />}
      </div>
    )
  })
)

export default MeetTheTeam
