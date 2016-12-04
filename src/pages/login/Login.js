import * as firebase from 'firebase'

import { Button, Card, Form, Grid } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import ErrorMessage from '../../components/errorMessage/ErrorMessage'

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
        <Grid.Column computer={8} largeScreen={4} tablet={10} mobile={16}>
          <Card style={{width: '100%'}}>
            <Card.Content header='Login' />
            <Card.Content extra>
              <Form onSubmit={this.userLogin}>
                <ErrorMessage
                  open={this.state.errorState}
                  message={this.state.errorMessage}
                  />
                  <br />
                <Form.Field>
                  <input
                    id='email'
                    name='email'
                    placeholder='Please enter your email'
                    required
                    type='email'
                    />
                  </Form.Field>
                <Form.Field>
                <input
                  id='password'
                  name='password'
                  placeholder='Please enter your password'
                  required
                  type='password'
                  />
                </Form.Field>
                <Button type='submit' loading={this.state.loading} color='pink' fluid>Login</Button>
              </Form>
              <br />
              <Link to='/forgotPassword'>Forgot your password?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
