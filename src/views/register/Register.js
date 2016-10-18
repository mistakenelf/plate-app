import React from 'react'
import { StyleRoot } from 'radium'
import { Grid, Cell } from 'radium-grid'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  registerContainer: {
    justifyContent: "center"
  },

  padTop: {
    marginTop: 50,
    width: "95%"
  }
}

function Register() {
  return (
    <StyleRoot>
      <Grid smallCellWidth="1" mediumCellWidth="1/2" align="center" style={styles.registerContainer}>
        <Cell>
          <Card style={styles.padTop}>
            <CardTitle title="Register" subtitle="Welcome To Spendy" />
            <CardText>
              <TextField hintText="First Name" fullWidth={true} />
              <br />
              <TextField hintText="Last Name" fullWidth={true} />
              <br />
              <TextField hintText="Username" fullWidth={true} />
              <br />
              <TextField hintText="Password" fullWidth={true} type="password" />
              <br />
              <RaisedButton label="Register" secondary={true} fullWidth={true} />
            </CardText>
          </Card>
        </Cell>
      </Grid>
    </StyleRoot>
  )
}

export default Register
