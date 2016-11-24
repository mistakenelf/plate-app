import * as firebase from 'firebase'

import { Button, Input, Panel, PanelFooter, PanelHeader, Text } from 'rebass'
import { Col, Grid, Row } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import { StyleSheet } from 'aphrodite'
import { css } from 'aphrodite'
import { toastr } from 'react-redux-toastr'

const styles = StyleSheet.create({
  registerMargin: {
    marginTop: '10%'
  }
})


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
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4} className={css(styles.registerMargin)}>
            <form onSubmit={this.registerUser}>
              <Panel theme='info'>
                <PanelHeader
                  inverted
                  theme='default'
                  >
                  Register
                </PanelHeader>
                <Input
                  label='First Name'
                  id='firstName'
                  name='firstName'
                  placeholder='Please enter your first name'
                  rounded
                  required
                  type='text'
                  />
                <Input
                  label='Last Name'
                  id='lastName'
                  name='lastName'
                  placeholder='Please enter your last name'
                  rounded
                  required
                  type='text'
                  />
                <Input
                  label='Email'
                  id='email'
                  name='email'
                  placeholder='Please enter your email'
                  rounded
                  required
                  type='email'
                  />
                <Input
                  label='Password'
                  id='password'
                  name='password'
                  placeholder='Please enter your password'
                  rounded
                  required
                  type='password'
                  />
                <PanelFooter>
                  <Button type='submit' style={{ width: '100%' }}>Register</Button>
                </PanelFooter>
                <br />
                <Text is={Link} to={'/login'}>
                  Already A Member?
                </Text>
              </Panel>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
