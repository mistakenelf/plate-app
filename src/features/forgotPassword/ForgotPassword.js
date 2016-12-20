import * as firebase from 'firebase'

import { Card, Grid } from 'semantic-ui-react'
import React, { Component } from 'react'

import ForgotPasswordForm from './ForgotPasswordForm'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: 'none',
      errorMessage: '',
      loading: false
    }
  }

  forgotPassword = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    })

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => browserHistory.push('/login'))

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
            <Card.Content header='Forgot Password' />
            <Card.Content extra>
              <ForgotPasswordForm
                forgotPassword={this.forgotPassword}
                errorState={this.state.errorState}
                errorMessage={this.state.errorMessage}
                loading={this.state.loading}
              />
              <br />
              <Link to='/login'>Remember it now?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
