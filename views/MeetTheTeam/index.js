import { injectState, provideState } from 'freactal'

import Modal from '../../components/Modal/Modal'
import React from 'react'

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
        <button onClick={effects.openModal} style={{ marginTop: 80 }}>
          Open Modal
        </button>
        <Modal open={state.displayModal} closeModal={effects.closeModal} />
      </div>
    )
  })
)

export default MeetTheTeam
