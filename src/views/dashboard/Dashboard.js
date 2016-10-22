import React from 'react'
import { Grid, Cell } from 'radium-grid'
import { blue800 } from 'material-ui/styles/colors'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  menuLayout: {
    backgroundColor: blue800,
    height: 200,
    width: '100%'
  }
}

function Dashboard() {
  return (
    <Grid>
      <Cell width="1">
        <Card style={styles.menuLayout}>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </Cell>
    </Grid>
  )
}

export default Dashboard
