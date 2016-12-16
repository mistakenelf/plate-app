import { Card } from 'semantic-ui-react'
import React from 'react'

const styles = {
  cardStyle: {
    width: '100%'
  }
}

function NoPlatesCard() {
  return (
    <Card style={styles.cardStyle}>
      <Card.Content>
        <Card.Header>
          No Plates Added
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

export default NoPlatesCard
