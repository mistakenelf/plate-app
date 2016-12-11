import { Button, Grid } from 'semantic-ui-react'
import React, { PropTypes } from 'react'

import Plate from './Plate'

const propTypes = {
  plates: PropTypes.array,
  addPlate: PropTypes.func,
  removePlate: PropTypes.func
}

function Dashboard({ plates, addPlate, removePlate }) {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <Button
            fluid
            color='pink'
            onClick={() => addPlate()}
          >
            Add New Plate
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {plates.map((plate, index) => {
          return (
            <Grid.Column
              key={index}
              computer={4}
              largeScreen={4}
              tablet={8}
              mobile={16}
              style={{ paddingBottom: 10 }}
            >
              <Plate key={index} plate={plate} removePlate={removePlate} />
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>
  )
}

Dashboard.propTypes = propTypes

export default Dashboard
