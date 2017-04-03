import React, { Component } from 'react';
import { Step, StepLabel, Stepper } from 'material-ui/Stepper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddPlate extends Component {
  state = {
    finished: false,
    stepIndex: 0,
    plateNameFromInput: ''
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  updatePlateName = () => {
    const { plateNameFromInput } = this.state;
    this.setState({
      plateNameFromInput: document.getElementById('plateNameInput').value
    });
  };

  getStepContent(stepIndex, plateNameFromInput) {
    switch (stepIndex) {
      case 0:
        return (
          <TextField
            id="plateNameInput"
            hintText="Enter A Plate Name"
            onChange={this.updatePlateName}
            style={{ marginTop: 100, marginBottom: 100, width: '500px' }}
          />
        );
        break;
      case 1:
        return (
          <TextField
            id="plateDescriptionHello"
            hintText="Give your plate a description..."
            style={{ marginTop: 100, marginBottom: 100, width: '500px' }}
          />
        );
      case 2:
        return (
          <Table>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn><b>Plate Name:</b></TableRowColumn>
                <TableRowColumn>
                  {plateNameFromInput}
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        );
        break;
      default:
        return 'nothing yet';
        break;
    }
  }

  render() {
    const { finished, stepIndex, plateNameFromInput } = this.state;
    return (
      <div className="container">
        <div
          className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg center-lg"
        >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <center>
              <h2 style={{ color: '#607D8B' }}><i>Create A New Plate</i></h2>
            </center>
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
              <Stepper activeStep={stepIndex}>
                <Step>
                  <StepLabel>Give your Plate a name</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Describe your Plate</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Create a Plate</StepLabel>
                </Step>
              </Stepper>
              <div style={{ margin: '0 16px' }}>
                {finished
                  ? <div>
                      <a
                        href="#"
                        onClick={event => {
                          event.preventDefault();
                          this.setState({ stepIndex: 0, finished: false });
                        }}
                      >
                        Click here
                      </a> to reset the example.
                    </div>
                  : <div>
                      {this.getStepContent(stepIndex, plateNameFromInput)}
                      <div style={{ marginTop: 12 }}>
                        <FlatButton
                          label="Back"
                          disabled={stepIndex === 0}
                          onTouchTap={this.handlePrev}
                          style={{ marginRight: 12 }}
                        />
                        <RaisedButton
                          label={stepIndex === 2 ? 'Finish' : 'Next'}
                          primary={true}
                          onTouchTap={this.handleNext}
                        />
                      </div>
                    </div>}
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {
            `
            .container {
              margin-top: 80px;
              justify-content: center;
            }
          `
          }
        </style>
      </div>
    );
  }
}

export default AddPlate;
