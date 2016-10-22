import React from 'react'
import { Grid, Cell } from 'radium-grid'
import { cyan500 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField';

const styles = {
  menuLayout: {
    backgroundColor: cyan500,
    height: 200,
    width: '100%'
  },

  menuHeader: {
    color: 'white'
  }
}

function Dashboard() {
  return (
    <Grid>
      <Cell width="1">
        <div style={styles.menuLayout}>
          <Cell width="1/4"></Cell>
          <Cell width="1/2" style={{ justifyContent: 'center' }}>
            <h2 style={styles.menuHeader}>create a group</h2>
            <TextField
              hintText="Hint Text"
            />
          </Cell>
        </div>
      </Cell>
    </Grid>
  )
}

export default Dashboard
