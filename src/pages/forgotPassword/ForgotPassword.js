import * as firebase from 'firebase'

import { Button, Col, ControlLabel, FormControl, FormGroup, Grid, Panel, Row } from 'react-bootstrap'
import React, { Component } from 'react'

import { StyleSheet } from 'aphrodite'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite'
import { toastr } from 'react-redux-toastr'

const styles = StyleSheet.create({
  forgotPasswordMargin: {
    marginTop: '25%'
  }
})

export default class ForgotPassword extends Component {
  forgotPassword(e) {
    e.preventDefault()

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => browserHistory.push('/login'))
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
            <Panel header={<h2>Forgot Password</h2>} bsStyle="primary" className={css(styles.forgotPasswordMargin)}>
              <form onSubmit={this.forgotPassword}>
                <FormGroup>
                  <ControlLabel>Email:</ControlLabel>
                  <FormControl type="email" id="email" placeholder="Email" required />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" bsStyle="primary" bsSize="large" block>Forgot Password</Button>
                </FormGroup>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}
