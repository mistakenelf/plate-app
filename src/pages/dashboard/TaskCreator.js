import {
  Button,
  Close,
  Input,
  Overlay,
  Panel,
  PanelFooter,
  PanelHeader,
  Space,
  Text,
  Textarea,
} from 'rebass'
import React, { Component, PropTypes } from 'react'

import { Box } from 'reflexbox'
import { toastr } from 'react-redux-toastr'

export default class TaskCreator extends Component {
  static propTypes = {
    tasks: PropTypes.array,
    addTask: PropTypes.func
  }

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

  submitTask = (e) => {
    e.preventDefault()

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
      <Box p={2} sm={12} md={4} lg={4} col={12}>
        <Panel theme='info'>
          <PanelHeader
            inverted
            theme='default'
            >
            Task Creator
          </PanelHeader>
          <Text>
            You have {this.props.tasks.length} tasks remaining
          </Text>
          <PanelFooter>
            <Button type='submit' style={{ width: '100%' }} onClick={this.showTaskCreator}>Add Task</Button>
          </PanelFooter>
        </Panel>
        <Overlay
          open={this.state.showModal}
          onDismiss={this.closeTaskCreator}>
          <form onSubmit={this.submitTask}>
            <Panel theme='success'>
              <PanelHeader>
                Create New Task!
                <Space auto />
                <Close onClick={this.closeTaskCreator} />
              </PanelHeader>
              <Input
                label='Task Name'
                id='taskName'
                name='taskName'
                placeholder='Enter the name of the task'
                rounded
                required
                type='text'
                />
              <Textarea
                placeholder='Please enter a description of the task'
                label='Description'
                name='taskDescription'
                id='taskDescription'
                required
                rounded
                />
              <PanelFooter>
                <Space auto />
                <Button
                  type='submit'
                  theme='success'
                  children='Create Task' />
              </PanelFooter>
            </Panel>
          </form>
        </Overlay>
      </Box>
    )
  }
}

