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
      return
    }

    const taskDescription = document.querySelector('#taskDescription').value

    if (taskDescription === '') {
      return
    }

    this.props.addTask(taskName, taskDescription)

    this.setState({
      showModal: false
    })
  }

  render() {
    const styles = {
      formMargin: {
        marginTop: '5%'
      },

      panelTheme: {
        backgroundColor: '#3F51B5',
        color: 'white'
      },

      addTaskButton: {
        backgroundColor: '#E91E63',
        color: 'white',
        width: '100%'
      }
    }

    return (
      <Box p={2} sm={12} md={4} lg={4} col={12}>
        <Panel theme='info'>
          <PanelHeader
            style={styles.panelTheme}
            inverted
            theme='default'
            >
            Task Creator
          </PanelHeader>
          <Text>
            You have {this.props.tasks.length} tasks remaining
          </Text>
          <PanelFooter>
            <Button type='submit' style={styles.addTaskButton} onClick={this.showTaskCreator}>Add Task</Button>
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
                <Close type='button' onClick={this.closeTaskCreator} />
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

