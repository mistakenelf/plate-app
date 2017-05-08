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
      <div className="container">
        <button onClick={effects.openModal}>
          Open Modal
        </button>
        <Modal open={state.displayModal} closeModal={effects.closeModal}>
          <form>
            <fieldset>
              <legend>Login</legend>
              <div className="input-group fluid">
                <label className="input-label" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  required
                />
              </div>
              <div className="input-group fluid">
                <label className="input-label" htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>
              <div className="input-group fluid">
                <button type="submit" className="primary">Login</button>
              </div>
            </fieldset>
          </form>
        </Modal>
      </div>
    )
  })
)

export default MeetTheTeam
