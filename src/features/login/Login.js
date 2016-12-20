import * as firebase from 'firebase'

import { Card, Grid } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import LoginForm from './LoginForm'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: 'none',
      errorMessage: '',
      loading: false
    }
  }

  userLogin = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    })

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))

      .catch((e) =>
        this.setState({
          errorState: 'initial',
          errorMessage: e.message,
          loading: false
        })
      )
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Column computer={8} largeScreen={5} tablet={10} mobile={16}>
          <Card fluid raised>
            <Card.Content header='Login' />
            <Card.Content extra>
              <LoginForm
                userLogin={this.userLogin}
                errorState={this.state.errorState}
                errorMessage={this.state.errorMessage}
                loading={this.state.loading}
              />
              <br />
              <Link to='/forgotPassword'>Forgot your password?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
