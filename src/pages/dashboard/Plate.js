import {
  Button,
  Panel,
  PanelFooter,
  PanelHeader,
  Text,
} from 'rebass'
import React, { PropTypes } from 'react'

import { Box } from 'reflexbox'

const propTypes = {
  plate: PropTypes.object
}

const styles = {
  panelTheme: {
    backgroundColor: '#3F51B5',
    color: 'white'
  },

  removePlateButton: {
    backgroundColor: '#E91E63',
    color: 'white',
    width: '100%'
  }
}

function Plate({ plate, ...otherProps }) {
  return (
    <Box p={2} sm={12} md={4} lg={3} col={12}>
      <Panel theme='info'>
        <PanelHeader
          style={styles.panelTheme}
          inverted
          theme='default'
          >
          {plate.plateName}
        </PanelHeader>
        <Text>
          <h4>{plate.plateDescription}</h4>
          <br />
        </Text>
        <PanelFooter>
          <Button
            type='submit'
            backgroundColor='error'
            style={styles.removePlateButton}
            onClick={() => otherProps.removePlate(plate.id)}
            >
          Remove Plate
          </Button>
        </PanelFooter>
      </Panel>
    </Box>
  )
}

Plate.propTypes = propTypes

export default Plate
