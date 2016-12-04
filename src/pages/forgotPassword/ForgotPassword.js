import * as firebase from 'firebase'

import { Button, Card, Form, Grid } from 'semantic-ui-react'
import React, { Component } from 'react'

import ErrorMessage from '../../components/errorMessage/ErrorMessage'
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
        <Grid.Column computer={8} largeScreen={4} tablet={10} mobile={16}>
          <Card style={{ width: '100%' }}>
            <Card.Content header='Forgot Password' />
            <Card.Content extra>
              <Form onSubmit={this.forgotPassword}>
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
                <Button type='submit' loading={this.state.loading} primary fluid>FORGOT PASSWORD</Button>
              </Form>
              <br />
              <Link to='/login'>Remember It Now?</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
