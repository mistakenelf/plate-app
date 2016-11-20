import * as firebase from 'firebase'

import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite'
import styles from './styles'
import { toastr } from 'react-redux-toastr'

export default class ForgotPassword extends Component {
  forgotPassword(e) {
    e.preventDefault()

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => browserHistory.push('/'))
      .then(() =>
        toastr.success('Success', 'Reset password email has been sent')
      )
      .catch((e) =>
        toastr.error('Error', e.message)
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
