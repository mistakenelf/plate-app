import * as firebase from 'firebase'

import { Card, Grid } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import RegisterForm from './RegisterForm'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: 'none',
      errorMessage: '',
      loading: false
    }
  }

  register = (e) => {
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
          <Card fluid raised>
            <Card.Content header='Register' />
            <Card.Content extra>
              <RegisterForm
                register={this.register}
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
