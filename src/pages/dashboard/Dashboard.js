import { Button, Grid } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

import Plate from './Plate'

const propTypes = {
  plates: PropTypes.array
}

function Dashboard({ plates, ...otherProps }) {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <Button fluid onClick={() => otherProps.addPlate()}>Add New Plate</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={4} largeScreen={4} tablet={4} mobile={16} style={{ paddingBottom: 10 }}>
        {plates.map((plate, index) => {
          return (
            <Plate key={index} plate={plate} {...otherProps} />
          )
        })}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Dashboard.propTypes = propTypes

export default Dashboard
