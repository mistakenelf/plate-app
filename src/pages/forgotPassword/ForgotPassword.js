import * as firebase from 'firebase'

import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react'

import Alert from 'react-s-alert'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite'
import styles from './styles'

export default class ForgotPassword extends Component {
  forgotPassword(e) {
    e.preventDefault()

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => browserHistory.push('/'))
      .then(() =>
        Alert.success('Email has been sent', {
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
            <Card className={css(styles.forgotFormMargin)}>
              <CardTitle title="Forgot Password" subtitle="Please enter your email" />
              <CardText>
                <form onSubmit={this.forgotPassword}>
                  <TextField hintText="Email" id="email" fullWidth={true} required={true} />
                  <br />
                  <RaisedButton type="submit" label="Forgot Password" secondary={true} fullWidth={true} />
                </form>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
