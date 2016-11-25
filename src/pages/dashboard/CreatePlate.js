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

export default class CreatePlate extends Component {
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

  showPlateCreator = () => {
    this.setState({
      showModal: true
    })
  }

  closePlateCreator = () => {
    this.setState({
      showModal: false
    })
  }

  submitPlate = (e) => {
    e.preventDefault()

    const plateName = document.querySelector('#plateName').value

    if (plateName === '') {
      return
    }

    const plateDescription = document.querySelector('#plateDescription').value

    if (plateDescription === '') {
      return
    }

    this.props.addPlate(plateName, plateDescription)

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

      addPlateButton: {
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
            Create A Plate
          </PanelHeader>
          <Text>
            You have {this.props.plates.length} plates created
          </Text>
          <PanelFooter>
            <Button type='submit' style={styles.addPlateButton} onClick={this.showPlateCreator}>Create Plate</Button>
          </PanelFooter>
        </Panel>
        <Overlay
          open={this.state.showModal}
          onDismiss={this.closePlateCreator}>
          <form onSubmit={this.submitPlate}>
            <Panel theme='success'>
              <PanelHeader>
                Create A New Plate!
                <Space auto />
                <Close type='button' onClick={this.closePlateCreator} />
              </PanelHeader>
              <Input
                label='Name'
                id='plateName'
                name='plateName'
                placeholder='Enter the name of your plate'
                rounded
                required
                type='text'
                />
              <Textarea
                placeholder='Please enter a description of your plate'
                label='Description'
                name='plateDescription'
                id='plateDescription'
                required
                rounded
                />
              <PanelFooter>
                <Space auto />
                <Button
                  type='submit'
                  theme='success'
                  children='Create Plate' />
              </PanelFooter>
            </Panel>
          </form>
        </Overlay>
      </Box>
    )
  }
}

