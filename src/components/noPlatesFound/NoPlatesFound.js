import { Card } from 'semantic-ui-react'
import React from 'react'

function NoPlatesFound() {
  return (
    <Card fluid raised>
      <Card.Content>
        <Card.Header>
          No Plates Found
        </Card.Header>
        <Card.Meta>
          Create a plate to get started
        </Card.Meta>
        <Card.Description>
          You currently have no plates. Please add a new plate to get started
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default NoPlatesFound
