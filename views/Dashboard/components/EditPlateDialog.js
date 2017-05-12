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
    console.log(this.props.plateStatus)
    return (
      <Modal
        open={this.props.editPlateOpen}
        closeModal={this.props.editPlateHandleClose}
      >
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
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <input
                name="currentPlateName"
                id="currentPlateName"
                type="text"
                value={this.props.plateName}
                style={{ marginBottom: 20 }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <textarea
                name="currentPlateDescription"
                id="currentPlateDescription"
                rows={4}
                value={this.props.plateDescription}
                style={{ marginBottom: 20 }}
              />
            </div>
          </div>
          <div>Status:</div>
          <div className="input-group" onChange>
            <input type="radio" id="rad1" tabIndex="0" name="radio-group-1" />
            <label htmlFor="rad1" style={{ marginRight: 20 }}>Complete</label>
            <input type="radio" id="rad1" tabIndex="0" name="radio-group-1" />
            <label htmlFor="rad1">In Progress</label>
          </div>
        </form>
        <style jsx>{`
          .header-style {
            margin-bottom: 10px;
          }
        `}</style>
      </Modal>
    )
  }
}

export default EditPlateDialog
