import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-bootstrap'
import * as firebase from 'firebase'
import { Link, browserHistory } from 'react-router'
import { css } from 'aphrodite'
import styles from './styles'

export default class Login extends Component {
  userLogin(e) {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .catch(e => console.log(e.message))

    if(firebase.auth().currentUser) {
      browserHistory.push('/')
    }
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
                <div className={css(styles.nonUser)}>
                  <Link to="/register" className={css(styles.hover)}>Not already a user?</Link>
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}
