import * as firebase from 'firebase'

import { Button, Input, Panel, PanelFooter, PanelHeader, Text } from 'rebass'
import { Col, Grid, Row } from 'react-bootstrap'
import React, { Component } from 'react'

import { Link } from 'react-router'
import { StyleSheet } from 'aphrodite'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite'
import { toastr } from 'react-redux-toastr'

const styles = StyleSheet.create({
  forgotPasswordMargin: {
    marginTop: '10%'
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
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4} className={css(styles.forgotPasswordMargin)}>
            <form onSubmit={this.registerUser}>
              <Panel theme='info'>
                <PanelHeader
                  inverted
                  theme='default'
                  >
                  Register
                </PanelHeader>
                <Input
                  label='Email'
                  id='email'
                  name='email'
                  placeholder='Please enter your email'
                  rounded
                  required
                  type='email'
                  />
                <PanelFooter>
                  <Button type='submit' style={{ width: '100%' }}>Forgot Password</Button>
                </PanelFooter>
                <br />
                <Text is={Link} to={'/login'}>
                  Remember It Now?
                </Text>
              </Panel>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
