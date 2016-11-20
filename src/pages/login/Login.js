import * as firebase from 'firebase'

import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col, Grid, Row } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import Alert from 'react-s-alert'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { css } from 'aphrodite'
import styles from './styles'

export default class Login extends Component {
  userLogin(e) {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))
      .then(() => 
        Alert.success('Welcome To Plate', {
            position: 'top-right',
        })
      )
      .catch((e) => 
        Alert.error(e.message, {
          position: 'top-right'
        })
      )
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            <Card className={css(styles.loginMargin)}>
              <CardTitle title="Login" subtitle="Welcome To Plate" />
              <CardText>
                <form onSubmit={this.userLogin}>
                  <TextField hintText="Email" id="email" fullWidth={true} required={true} />
                  <br />
                  <TextField hintText="Password" id="password" fullWidth={true} type="password" required={true} />
                  <br />
                  <RaisedButton type="submit" label="Login" secondary={true} fullWidth={true} />
                </form>
                <br />
                <div className={css(styles.nonUser)}>
                  <Link to="/forgotPassword" className={css(styles.hover)}>Forgot Your Password?</Link>
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
