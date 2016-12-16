import { Card, Grid, Icon } from 'semantic-ui-react'

import React from 'react'

const styles = {
  cardStyle: {
    width: '100%',
    textAlign: 'center'
  },
  centerIcon: {
    textAlign: 'center'
  }
}

function NotFound() {
  return (
    <Grid centered padded>
      <Grid.Column computer={8} largeScreen={4} tablet={10} mobile={16}>
        <Card style={styles.cardStyle}>
          <div style={styles.centerIcon}>
            <Icon name='warning' size='massive' color='red' />
          </div>
          <Card.Content extra>
            <p>
              Sorry, but the page you are trying to reach does not exist.
              If you believe this is an error, please contact your administrator
              or your Plate team. Thanks!
            </p>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default NotFound



