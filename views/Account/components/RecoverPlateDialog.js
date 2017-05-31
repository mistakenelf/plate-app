import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'

const recoverPlate = async (
  plate,
  addRecoveredPlate,
  removeRecoveredPlate,
  closeDialog
) => {
  await addRecoveredPlate(
    plate.name,
    plate.description,
    plate.thumbnail,
    plate.status,
    plate.content,
    plate.createdBy
  )
  await removeRecoveredPlate(plate.id)
  closeDialog()
}

export default function RecoverPlateDialog({
  dialogOpen,
  closeDialog,
  addRecoveredPlate,
  removeRecoveredPlate,
  plate
}) {
  return (
    <Modal open={dialogOpen} closeModal={closeDialog}>
      <h3 style={{ color: 'white', marginTop: 150 }}>
        Are you sure you want to recover this plate?
      </h3>
      <button type="secondary" className="secondary" onClick={closeDialog}>
        Cancel
      </button>
      <button
        type="submit"
        className="primary"
        style={{ float: 'right' }}
        onClick={() =>
          recoverPlate(
            plate,
            addRecoveredPlate,
            removeRecoveredPlate,
            closeDialog
          )}
      >
        Confirm
      </button>
    </Modal>
  )
}

RecoverPlateDialog.propTypes = {
  dialogOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
  addRecoveredPlate: PropTypes.func,
  removeRecoveredPlate: PropTypes.func,
  plate: PropTypes.object
}
