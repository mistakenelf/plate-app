import { Button, Col, ControlLabel, FormControl, FormGroup, Modal, Panel } from 'react-bootstrap'
import React, { Component } from 'react'

import { css } from 'aphrodite'
import styles from './styles'
import { toastr } from 'react-redux-toastr'

export default class TaskCreator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  showTaskCreator = () => {
    this.setState({
      showModal: true
    })
  }

  closeTaskCreator = () => {
    this.setState({
      showModal: false
    })
  }

  submitTask = () => {
    const taskName = document.querySelector('#taskName').value

    if (taskName === '') {
      toastr.error('Error', 'Please enter a task name')
      return
    }

    const taskDescription = document.querySelector('#taskDescription').value

    if (taskDescription === '') {
      toastr.error('Error', 'Please enter a task description')
      return
    }

    this.props.addTask(taskName, taskDescription)

    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <Col md={4} lg={4} className={css(styles.paddingTop)}>
        <Panel header={<h3>Task Creator</h3>} bsStyle="primary">
          <h2>You have {this.props.tasks.length} tasks remaining</h2>
          <Modal show={this.state.showModal} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.userLogin}>
                <FormGroup>
                  <ControlLabel>Task Name:</ControlLabel>
                  <FormControl type="text" id="taskName" placeholder="Task Name" required />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Task Description:</ControlLabel>
                  <FormControl type="text" rows={6} componentClass="textarea" id="taskDescription" placeholder="Task Description" required />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeTaskCreator}>Close</Button>
              <Button bsStyle="primary" onClick={this.submitTask}>Add Task</Button>
            </Modal.Footer>
          </Modal>
          <FormGroup>
            <Button type="submit" bsStyle="success" onClick={this.showTaskCreator} bsSize="large" block>Add Task</Button>
          </FormGroup>
        </Panel>
      </Col>
    )
  }
}

