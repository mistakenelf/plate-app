import * as firebase from 'firebase'

import { Button, Col, ControlLabel, FormControl, FormGroup, Grid, Panel, Row } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import { StyleSheet } from 'aphrodite'
import { css } from 'aphrodite'
import { toastr } from 'react-redux-toastr'

export default class Login extends Component {
  userLogin(e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))
      .then(() =>
        toastr.success('Success', 'Welcome To Plate')
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
            <Panel header={<h3>Login</h3>} bsStyle="primary" className={css(styles.loginMargin)}>
              <form onSubmit={this.userLogin}>
                <FormGroup>
                  <ControlLabel>Email:</ControlLabel>
                  <FormControl type="email" id="email" placeholder="Email" required />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password:</ControlLabel>
                  <FormControl type="password" id="password" placeholder="Password" required />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" bsStyle="primary" bsSize="large" block>Login</Button>
                </FormGroup>
              </form>
              <Link to="/forgotPassword">Forgot Password?</Link>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  loginMargin: {
    marginTop: '25%'
  }
})
