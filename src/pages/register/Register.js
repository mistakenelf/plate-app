import * as firebase from 'firebase'

import { Button, Col, ControlLabel, FormControl, FormGroup, Grid, Panel, Row } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import { StyleSheet } from 'aphrodite'
import { css } from 'aphrodite'
import { toastr } from 'react-redux-toastr'

export default class Register extends Component {
  registerUser(e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))

      .then(() =>
        toastr.success('Success', 'Thank you for registering for Plate')
      )

      .catch(e =>
        toastr.error('Error', e.message)
      )
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            <Panel header={<h3>Login</h3>} bsStyle="primary" className={css(styles.registerMargin)}>
              <form onSubmit={this.registerUser}>
                <FormGroup>
                  <ControlLabel>First Name:</ControlLabel>
                  <FormControl type="text" id="firstName" placeholder="First Name" required />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Last Name:</ControlLabel>
                  <FormControl type="text" id="lastName" placeholder="Last Name" required />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Email:</ControlLabel>
                  <FormControl type="email" id="email" placeholder="Email" required />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password:</ControlLabel>
                  <FormControl type="password" id="password" placeholder="Password" required />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" bsStyle="primary" bsSize="large" block>Register</Button>
                </FormGroup>
              </form>
              <Link to="/login">Already A Member?</Link>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  registerMargin: {
    marginTop: "25%"
  }
})
