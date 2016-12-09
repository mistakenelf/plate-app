import { Button, Card, Image } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

const propTypes = {
  plate: PropTypes.object
}

function Plate({ plate, ...otherProps }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Content>
        <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>
          {plate.plateName}
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          {plate.plateDescription}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Launch</Button>
          <Button basic color='red' onClick={() => otherProps.removePlate(plate.id)}>Remove</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

Plate.propTypes = propTypes

export default Plate
