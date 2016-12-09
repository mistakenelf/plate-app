import { Button, Card, Icon } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

const propTypes = {
  plate: PropTypes.object
}

function Plate({ plate, ...otherProps }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Content>
        <Icon size='big' name='food' style={{ float: 'right' }} />
        <Card.Header>
          {plate.plateName}
        </Card.Header>
        <Card.Meta>
          {Date()}
        </Card.Meta>
        <Card.Description>
          {plate.plateDescription}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Fill</Button>
          <Button basic color='red' onClick={() => otherProps.removePlate(plate.id)}>Wash</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

Plate.propTypes = propTypes

export default Plate
