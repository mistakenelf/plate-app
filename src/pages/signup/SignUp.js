import * as firebase from 'firebase'

import { Button, Card, Form, Grid } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import ErrorMessage from '../../components/errorMessage/ErrorMessage'

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
              <Form onSubmit={this.signUp}>
                <ErrorMessage
                  open={this.state.errorState}
                  message={this.state.errorMessage}
                  />
                <br />
                <Form.Field>
                  <input
                    id='firstName'
                    name='firstName'
                    placeholder='Please enter your first name'
                    required
                    type='text'
                    />
                </Form.Field>
                <Form.Field>
                  <input
                    id='lastName'
                    name='lastName'
                    placeholder='Please enter your last name'
                    required
                    type='text'
                    />
                </Form.Field>
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
                <Button type='submit' loading={this.state.loading} color='pink' fluid>Sign Up</Button>
              </Form>
              <br />
              <Link to='/login'>Already a member?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
