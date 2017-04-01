import React, { Component } from 'react';
import { Step, StepLabel, Stepper } from 'material-ui/Stepper';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddPlate extends Component {
  state = {
    finished: false,
    stepIndex: 0
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

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <center>
            <TextField
              hintText="Enter A Plate Name"
              style={{ marginTop: 100, marginBottom: 100, width: '500px' }}
            />
          </center>
        );
        break;
      case 1:
        return 'nothing yet';
        break;
      case 2:
        return 'nothing yet';
        break;
      default:
        return 'nothing yet';
        break;
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
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
                  ? <p>
                      <a
                        href="#"
                        onClick={event => {
                          event.preventDefault();
                          this.setState({ stepIndex: 0, finished: false });
                        }}
                      >
                        Click here
                      </a> to reset the example.
                    </p>
                  : <div>
                      <p>{this.getStepContent(stepIndex)}</p>
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
