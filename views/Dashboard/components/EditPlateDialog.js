import { injectState, provideState } from 'freactal'

import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'

const wrapComponentWithState = provideState({
  initialState: () => ({
    plateStatusSelected: 'new'
  }),
  effects: {
    updatePlateStatus: (effects, statusSelected) => state =>
      Object.assign({}, state, { plateStatusSelected: statusSelected })
  }
})

const editPlateDetails = async (
  e,
  state,
  id,
  editPlate,
  editPlateHandleClose
) => {
  e.preventDefault()
  const newPlateName = document.getElementById('currentPlateName').value
  const newPlateDescription = document.getElementById('currentPlateDescription')
    .value
  await editPlate(
    id,
    newPlateName,
    newPlateDescription,
    state.plateStatusSelected
  )
  editPlateHandleClose()
}

const plateStatusSelection = (state, effects) => {
  var selectedValue = document.querySelector(
    'input[name = "plateStatus"]:checked'
  ).value
  effects.updatePlateStatus(selectedValue)
}

const EditPlateDialog = wrapComponentWithState(
  injectState(
    ({
      state,
      effects,
      editPlateOpen,
      editPlateHandleClose,
      plateId,
      plateName,
      plateDescription,
      editPlate
    }) => {
      return (
        <Modal open={editPlateOpen} closeModal={editPlateHandleClose}>
          <h3 className="header-style">Edit Plate</h3>
          <form
            id="editPlateForm"
            onSubmit={e =>
              editPlateDetails(
                e,
                state,
                plateId,
                editPlate,
                editPlateHandleClose
              )}
          >
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="input-group" style={{ width: '100%' }}>
                  <label>
                    Plate Name:
                  </label>
                  <br />
                  <input
                    name="currentPlateName"
                    id="currentPlateName"
                    type="text"
                    defaultValue={plateName}
                    style={{ marginBottom: 20, width: '100%' }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="input-group" style={{ width: '100%' }}>
                  <label>
                    Plate Description:
                  </label>
                  <br />
                  <textarea
                    name="currentPlateDescription"
                    id="currentPlateDescription"
                    rows={4}
                    defaultValue={plateDescription}
                    style={{ marginBottom: 20, width: '100%' }}
                    required
                  />
                </div>
              </div>
            </div>
            <div>Status:</div>
            <div
              className="input-group"
              onChange={() => plateStatusSelection(state, effects)}
            >
              <input
                type="radio"
                id="complete"
                tabIndex="0"
                name="plateStatus"
                value="Complete"
              />
              <label htmlFor="complete" style={{ marginRight: 20 }}>
                Complete
              </label>
              <input
                type="radio"
                id="inProgress"
                tabIndex="0"
                name="plateStatus"
                value="In-Progress"
              />
              <label htmlFor="inProgress">In Progress</label>
            </div>
            <br />
            <div className="input-group">
              <button className="secondary" onClick={editPlateHandleClose}>
                Cancel
              </button>
              <button className="primary" type="submit">Submit</button>
            </div>
          </form>
          <style jsx>{`
          .header-style {
            margin-bottom: 10px;
          }
          .button-options {
            float: right;
          }
        `}</style>
        </Modal>
      )
    }
  )
)

EditPlateDialog.propTypes = {
  editPlateOpen: PropTypes.bool,
  editPlateHandleClose: PropTypes.func,
  plateId: PropTypes.string,
  plateName: PropTypes.string,
  plateDescription: PropTypes.string,
  plateStatus: PropTypes.string,
  editPlate: PropTypes.func
}

export default EditPlateDialog
