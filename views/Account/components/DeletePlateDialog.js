import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'

const deletePlate = (removeRecoveredPlate, plateId, closeDialog) => {
  removeRecoveredPlate(plateId)
  closeDialog()
}

export default function DeletePlateDialog({
  dialogOpen,
  closeDialog,
  removeRecoveredPlate,
  plateId
}) {
  return (
    <Modal open={dialogOpen} closeModal={closeDialog}>
      <h3 style={{ color: 'white', marginTop: 150 }}>
        Are you sure you want to PERMANENTLY delete this plate?
      </h3>
      <button type="secondary" className="secondary" onClick={closeDialog}>
        Cancel
      </button>
      <button
        type="submit"
        className="primary"
        style={{ float: 'right' }}
        onClick={() => deletePlate(removeRecoveredPlate, plateId, closeDialog)}
      >
        Confirm
      </button>
    </Modal>
  )
}

DeletePlateDialog.propTypes = {
  dialogOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
  removeRecoveredPlate: PropTypes.func,
  plateId: PropTypes.string
}
