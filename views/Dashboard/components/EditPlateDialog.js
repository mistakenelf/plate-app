import { Field, reduxForm } from 'redux-form'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import EditPlateValidation from '../../../validations/EditPlateValidation'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'
import RenderRegularTextField from '../../../utils/RenderRegularTextField'

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
    <FlatButton
      label="Cancel"
      key="cancel"
      onTouchTap={this.props.editPlateHandleClose}
      primary
    />,
    <FlatButton
      label="Submit"
      key="edit"
      form="editPlateForm"
      secondary
      type="submit"
    />
  ]

  render() {
    return (
      <Dialog
        actions={this.actions}
        modal={false}
        open={this.props.editPlateOpen}
        onRequestClose={this.props.editPlateHandleClose}
        contentStyle={{ width: '95%' }}
      >
        <h3 className="header-style">Edit Plate</h3>
        <form
          id="editPlateForm"
          onSubmit={this.props.handleSubmit(() =>
            this.editPlateDetails(
              this.props.plateId,
              this.props.editPlate,
              this.props.editPlateHandleClose
            )
          )}
        >
          <span className="label-style">Name:</span>
          <Field
            name="currentPlateName"
            id="currentPlateName"
            component={RenderRegularTextField}
            type="text"
            label={this.props.plateName}
            style={{ marginBottom: 20 }}
          />
          <span className="label-style">Description:</span>
          <Field
            name="currentPlateDescription"
            id="currentPlateDescription"
            component={RenderRegularTextField}
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
      </Dialog>
    )
  }
}
export default reduxForm({
  form: 'editPlateForm',
  validate: EditPlateValidation
})(EditPlateDialog)
