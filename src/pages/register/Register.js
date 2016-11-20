import * as firebase from 'firebase'

import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col, Grid, Row } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { css } from 'aphrodite'
import styles from './styles'
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
        toastr.error('Errors Occured', e.message)
      )
  }

  render() {
    return (
      <Grid fluid className={css(styles.background)}>
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            <Card className={css(styles.registerMargin)}>
              <CardTitle title="Register" subtitle="Welcome To Plate" />
              <CardText>
                <form onSubmit={this.registerUser.bind(this)}>
                  <TextField hintText="First Name" id="firstName" fullWidth={true} required />
                  <br />
                  <TextField hintText="Last Name" id="lastName" fullWidth={true} required />
                  <br />
                  <TextField hintText="Email" id="email" fullWidth={true} required />
                  <br />
                  <TextField hintText="Password" id="password" fullWidth={true} type="password" required />
                  <br />
                  <RaisedButton type="submit" label="Register" secondary={true} fullWidth={true} />
                  <div className={css(styles.alreadyUser)}>
                    <Link to="/login" className={css(styles.hover)}>Already a user?</Link>
                  </div>
                </form>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
