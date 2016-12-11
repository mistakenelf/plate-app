import {
  Button,
  Card,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'
import React, { Component, PropTypes } from 'react'

import { Link } from 'react-router'

export default class Plate extends Component {
  static propTypes = {
    plate: PropTypes.object,
    removePlate: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  washPlate = () => {
    this.setState({
      open: true
    })
  }

  handleConfirm = () => {
    this.setState({
      open: false
    })

    this.props.removePlate(this.props.plate.id)
  }

  handleCancel = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Icon size='big' name='food' style={{ float: 'right' }} />
          <Card.Header>
            {this.props.plate.plateName}
          </Card.Header>
          <Card.Meta>
            Created On: {Date()}
          </Card.Meta>
          <Card.Description>
            {this.props.plate.plateDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button
              as={Link}
              to={`/dashboard/${this.props.plate.id}`}
              basic
              color='green'
              >
            Fill
            </Button>
            <Modal
              trigger={<Button basic color='red' onClick={this.washPlate}>Wash</Button>}
              basic
              size='small'
              open={this.state.open}
            >
              <Header icon='archive' content='Wash This Plate' />
              <Modal.Content>
                <p>
                  Are you sure you want to wash this plate? It will be ran
                  though an industrial dishwasher and nothing will be left.
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.handleCancel} color='red' inverted>
                  <Icon name='remove' /> No
                </Button>
                <Button onClick={this.handleConfirm} color='green' inverted>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
