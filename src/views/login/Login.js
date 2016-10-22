import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-bootstrap'
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  loginMargin: {
    marginTop: 25
  }
})

export default class Login extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log(user)
        browserHistory.push('/')
      } else {
        console.log('Error logging in')
      }
    })
  }

  userLogin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .catch(e => console.log(e.message))
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            <Card className={css(styles.loginMargin)}>
              <CardTitle title="Login" subtitle="Welcome To Plate" />
              <CardText>
                <TextField hintText="Email" id="email" fullWidth={true} />
                <br />
                <TextField hintText="Password" id="password" fullWidth={true} type="password" />
                <br />
                <RaisedButton label="Login" secondary={true} fullWidth={true} onClick={this.userLogin} />
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
