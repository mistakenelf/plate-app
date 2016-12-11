import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'
import React, { Component, PropTypes } from 'react'

import Plate from './Plate'

export default class extends Component {
  static propTypes = {
    plates: PropTypes.array,
    addPlate: PropTypes.func,
    removePlate: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  confirmPlate = (e) => {
    e.preventDefault()

    const plateName = document.querySelector('#plateName').value
    const plateDescription = document.querySelector('#plateDescription').value

    this.setState({
      modalOpen: false
    })

    this.props.addPlate(plateName, plateDescription)
  }

  cancelPlate = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <Modal
              trigger={<Button fluid color='pink' onClick={this.handleOpen}>Add New Plate</Button>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              size='small'
            >
              <Header icon='browser' content='Add New Plate' />
              <Modal.Content>
                <Form onSubmit={this.confirmPlate}>
                  <Form.Field
                    name='plateName'
                    label='Plate Name'
                    control='input'
                    type='text'
                    id='plateName'
                    placeholder='Give your plate a name'
                    required
                  />
                  <Form.TextArea
                    name='plateDescription'
                    id='plateDescription'
                    label='Plate Description'
                    placeholder='Leave a description of your new plate'
                    required
                  />
                  <Button color='red' onClick={this.cancelPlate} inverted>
                    <Icon name='remove' />Cancel
                  </Button>
                  <Button type='submit' color='green' inverted>
                    <Icon name='checkmark' />Confirm
                  </Button>
                </Form>
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {this.props.plates.map((plate, index) => {
            return (
              <Grid.Column
                key={index}
                computer={4}
                largeScreen={4}
                tablet={8}
                mobile={16}
                style={{ paddingBottom: 10 }}
              >
                <Plate key={index} plate={plate} removePlate={this.props.removePlate} />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    )
  }
}
