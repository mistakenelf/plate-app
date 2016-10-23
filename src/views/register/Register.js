import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-bootstrap'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase'
import { Link, browserHistory } from 'react-router'
import { css } from 'aphrodite'
import styles from './styles'

export default class Register extends Component {
  registerUser(e) {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)

    promise.catch(e => console.log(e.message))

    if(firebase.auth().currentUser) {
      browserHistory.push('/')
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            <Card className={css(styles.registerMargin)}>
              <CardTitle title="Register" subtitle="Welcome To Plate" />
              <CardText>
                <TextField hintText="First Name" id="firstName" fullWidth={true} />
                <br />
                <TextField hintText="Last Name" id="lastName" fullWidth={true} />
                <br />
                <TextField hintText="Email" id="email" fullWidth={true} />
                <br />
                <TextField hintText="Password" id="password" fullWidth={true} type="password" />
                <br />
                <RaisedButton label="Register" secondary={true} fullWidth={true} onClick={this.registerUser} />
                <div className={css(styles.alreadyUser)}>
                  <Link to="/login" className={css(styles.hover)}>Already a user?</Link>
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
