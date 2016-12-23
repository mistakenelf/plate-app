import * as firebase from 'firebase'

import { Card, Grid } from 'semantic-ui-react'
import React, { Component } from 'react'

import ForgotPasswordForm from './components/ForgotPasswordForm'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import store from './store/store'

const ForgotPassword = observer(class ForgotPassword extends Component {
  forgotPassword = (e) => {
    e.preventDefault()

    store.loading = true

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => store.loading = false)
      .then(() => store.errorState = 'none')
      .then(() => browserHistory.push('/login'))

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
            <Card.Content header='Forgot Password' />
            <Card.Content extra>
              <ForgotPasswordForm
                forgotPassword={this.forgotPassword}
                errorState={store.errorState}
                errorMessage={store.errorMessage}
                loading={store.loading}
              />
              <br />
              <Link to='/login'>Remember it now?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
})

export default ForgotPassword
