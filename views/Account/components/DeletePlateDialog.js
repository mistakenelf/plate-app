import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'

const RecoverPlateDialog = ({
  dialogOpen,
  closeDialog,
  removeRecoveredPlate,
  plateId
}) => (
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
      onClick={() => removeRecoveredPlate(plateId)}
    >
      Confirm
    </button>
  </Modal>
)

RecoverPlateDialog.propTypes = {
  dialogOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
  removeRecoveredPlate: PropTypes.func,
  plateId: PropTypes.string
}

export default RecoverPlateDialog
