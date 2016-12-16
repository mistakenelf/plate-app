import * as firebase from 'firebase'

import { Card, Grid } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import SignUpForm from './SignUpForm'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: 'none',
      errorMessage: '',
      loading: false
    }
  }

  signUp = (e) => {
    e.preventDefault()

    this.setState({
      loading: true
    })

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))

      .catch(e =>
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
          <Card style={{ width: '100%' }}>
            <Card.Content header='Sign Up' />
            <Card.Content extra>
              <SignUpForm
                signUp={this.signUp}
                errorState={this.state.errorState}
                errorMessage={this.state.errorMessage}
                loading={this.state.loading}
              />
              <br />
              <Link to='/login'>Already a member?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
