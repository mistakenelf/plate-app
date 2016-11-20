import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card'
import React, { Component } from 'react'

import { Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { css } from 'aphrodite'
import styles from './styles'
import { toastr } from 'react-redux-toastr'

export default class TaskCreator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }


  handleClose = () => {
    this.setState({
      open: false
    })
  }

  submitTask = () => {
    const taskName = document.querySelector('#taskName').value

    if(taskName === '' ) {
      toastr.error('Error', 'Please enter a task name')
      return
    }

    const taskDescription = document.querySelector('#taskDescription').value

    if(taskDescription === '' ) {
      toastr.error('Error', 'Please enter a task description')
      return
    }

    this.props.addTask(taskName, taskDescription)

    this.setState({
      open: false
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.submitTask}
        />,
    ]

    return (
      <Col md={4} lg={4} className={css(styles.paddingTop)}>
        <Card>
          <CardTitle title="Task Tracker" />
          <CardText>
            <h4>You have {this.props.tasks.length} tasks remaining</h4>
          </CardText>
          <CardActions>
            <RaisedButton
              label="Create New Task"
              fullWidth={true} secondary={true}
              onTouchTap={this.handleOpen}
              />
          </CardActions>
        </Card>
        <Dialog
          title="Create New Task"
          actions={actions}
          modal={true}
          open={this.state.open}
          >
          <TextField hintText="Task Name" id="taskName" />
          <br />
          <TextField floatingLabelText="Task Description" id="taskDescription" multiLine={true} rows={6} />
        </Dialog>
      </Col>
    )
  }
}

