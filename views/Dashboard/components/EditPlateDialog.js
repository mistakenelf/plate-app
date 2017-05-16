import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'

const editPlateDetails = async (
  e,
  id,
  editPlate,
  status,
  editPlateHandleClose
) => {
  e.preventDefault()
  const newPlateName = document.getElementById('currentPlateName').value
  const newPlateDescription = document.getElementById('currentPlateDescription')
    .value
  let newPlateStatus = document.querySelector(
    'input[name = "newPlateStatus"]:checked'
  )

  if (newPlateStatus) {
    newPlateStatus = newPlateStatus.value
  }

  await editPlate(
    id,
    newPlateName,
    newPlateDescription,
    newPlateStatus || status
  )
  editPlateHandleClose()
}

const EditPlateDialog = ({
  editPlateOpen,
  editPlateHandleClose,
  plateId,
  plateName,
  plateDescription,
  editPlate,
  plateStatus
}) => {
  return (
    <Modal open={editPlateOpen} closeModal={editPlateHandleClose}>
      <form
        id="editPlateForm"
        onSubmit={e =>
          editPlateDetails(
            e,
            plateId,
            editPlate,
            plateStatus,
            editPlateHandleClose
          )}
      >
        <fieldset>
          <legend>Edit Plate</legend>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="plateName">
              Plate Name:
            </label>
            <input
              name="currentPlateName"
              id="currentPlateName"
              type="text"
              defaultValue={plateName}
              required
            />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="plateDescription">
              Plate Description:
            </label>
            <textarea
              name="currentPlateDescription"
              id="currentPlateDescription"
              rows={4}
              defaultValue={plateDescription}
              style={{ marginBottom: 20, width: '100%' }}
              required
            />
          </div>
          <div className="input-group fluid">
            <input
              type="radio"
              id="inProgress"
              defaultValue="in-progress"
              name="newPlateStatus"
            />
            <label htmlFor="inProgress">In-Progress</label>
            <input
              type="radio"
              id="complete"
              defaultValue="complete"
              name="newPlateStatus"
            />
            <label htmlFor="complete">Complete</label>
          </div>
        </fieldset>
        <div className="input-group">
          <button
            type="button"
            className="secondary"
            onClick={editPlateHandleClose}
          >
            Cancel
          </button>
          <button type="submit" className="primary">Submit</button>
        </div>
      </form>
      <style jsx>{`
        .input-label {
          width: 90px;
        }
      `}</style>
    </Modal>
  )
}

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
