import React, { Component } from 'react'

import { Field } from 'redux-form'
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

  actions = [
    <input
      type="button"
      className="secondary"
      value="Cancel"
      onClick={this.props.editPlateHandleClose}
    />,
    <input type="submit" className="primary" value="Submit" />
  ]

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
          <Field
            name="currentPlateName"
            id="currentPlateName"
            type="text"
            label={this.props.plateName}
            style={{ marginBottom: 20 }}
          />
          <span className="label-style">Description:</span>
          <Field
            name="currentPlateDescription"
            id="currentPlateDescription"
            type="text"
            rows={4}
            rowsMax={4}
            label={this.props.plateDescription}
            multiLine
            style={{ marginBottom: 20 }}
          />
          <span>Status:</span>
          <RadioButtonGroup
            name="currentPlateStatus"
            defaultSelected="in_progress"
            onChange={this.plateStatusSelection}
          >
            <RadioButton
              value="in_progress"
              label="In Progress"
              style={{ marginTop: 10 }}
            />
            <RadioButton
              value="plate_complete"
              label="Complete"
              style={{ marginTop: 10 }}
            />
          </RadioButtonGroup>
        </form>
        <style jsx>
          {`
            .header-style {
              margin-bottom: 10px;
            }
            .label-style {
              margin-right: 10px;
            }
          `}
        </style>
      </Modal>
    )
  }
}

export default EditPlateDialog
