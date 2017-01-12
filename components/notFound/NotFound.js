import { Card, Grid, Icon } from 'semantic-ui-react'

import React from 'react'

const styles = {
  centerAlign: {
    textAlign: 'center'
  }
}

function NotFound() {
  return (
    <Grid centered padded>
      <Grid.Column computer={8} largeScreen={4} tablet={10} mobile={16}>
        <Card fluid raised style={styles.centerAlign}>
          <div style={styles.centerAlign}>
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



