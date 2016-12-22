import * as firebase from 'firebase'

import { Card, Grid } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import LoginForm from './components/LoginForm'
import { observer } from 'mobx-react'
import store from './store/store'

const Login = observer(class Login extends Component {
  userLogin = (e) => {
    e.preventDefault()

    store.loading = true

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .then(() => store.loading = false)
      .then(() => store.errorState = 'none')
      .then(() => browserHistory.push('/'))

      .catch((e) => {
        store.errorState = 'initial'
        store.errorMessage = e.message
        store.loading = false
      })
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Column computer={5} largeScreen={5} tablet={10} mobile={16}>
          <Card fluid raised>
            <Card.Content header='Login' />
            <Card.Content extra>
              <LoginForm
                userLogin={this.userLogin}
                errorState={store.errorState}
                errorMessage={store.errorMessage}
                loading={store.loading}
              />
              <br />
              <Link to='/forgotPassword'>Forgot your password?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
})

export default Login
