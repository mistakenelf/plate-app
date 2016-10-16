import React from 'react'
import { Grid, Cell } from 'radium-grid'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  loginContainer: {
    justifyContent: "center"
  },

  padTop: {
    marginTop: 50,
    width: "95%"
  }
}

function Login() {
  return (
    <Grid smallCellWidth="1" mediumCellWidth="1/2" align="center" style={styles.loginContainer}>
      <Cell>
        <Card style={styles.padTop}>
          <CardTitle title="Login" subtitle="Welcome To Spendy" />
          <CardText>
            <TextField hintText="Username" fullWidth={true} />
            <br />
            <TextField hintText="Password" fullWidth={true} type="password" />
            <br />
            <RaisedButton label="Login" secondary={true} fullWidth={true} />
          </CardText>
        </Card>
      </Cell>
    </Grid>
  )
}

export default Login
