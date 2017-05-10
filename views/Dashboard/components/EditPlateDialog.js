import React, { Component } from 'react'

import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'

class EditPlateDialog extends Component {
  static propTypes = {
    editPlateOpen: PropTypes.bool,
    editPlateHandleClose: PropTypes.func,
    plateId: PropTypes.string,
    plateName: PropTypes.string,
    plateDescription: PropTypes.string,
    plateStatus: PropTypes.string,
    editPlate: PropTypes.func,
    handleSubmit: PropTypes.func
  }

  state = {
    plateStatusSelected: 'New'
  }

  editPlateDetails = async (id, editPlate, editPlateHandleClose) => {
    const newPlateName = document.getElementById('currentPlateName').value
    const newPlateDescription = document.getElementById(
      'currentPlateDescription'
    ).value
    await editPlate(
      id,
      newPlateName,
      newPlateDescription,
      this.state.plateStatusSelected
    )
    editPlateHandleClose()
  }

  plateStatusSelection = (e, value) => {
    if (value === 'plate_complete') {
      this.setState({
        plateStatusSelected: 'Complete'
      })
    } else {
      this.setState({
        plateStatusSelected: 'In Progress'
      })
    }
  }

  render() {
    return (
      <Modal open={this.props.editPlateOpen}>
        <h3 className="header-style">Edit Plate</h3>
        <form
          id="editPlateForm"
          onSubmit={() =>
            this.editPlateDetails(
              this.props.plateId,
              this.props.editPlate,
              this.props.editPlateHandleClose
            )}
        >
          <span className="label-style">Name:</span>
          <input
            name="currentPlateName"
            id="currentPlateName"
            type="text"
            style={{ marginBottom: 20 }}
          />
          <span className="label-style">Description:</span>
          <textarea
            name="currentPlateDescription"
            id="currentPlateDescription"
            rows={4}
            style={{ marginBottom: 20 }}
          />
          <span>Status:</span>
          <div className="input-group">
            <input type="radio" id="rad1" tabIndex="0" name="radio-group-1" />
            <label htmlFor="rad1">Radio</label>
          </div>
        </form>
        <style jsx>{`
          .header-style {
            margin-bottom: 10px;
          }
          .label-style {
            margin-right: 10px;
          }
        `}</style>
      </Modal>
    )
  }
}

export default EditPlateDialog
