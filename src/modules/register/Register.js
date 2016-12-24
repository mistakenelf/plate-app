import * as firebase from 'firebase'

import { Card, Grid, Header, Message } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

import RegisterForm from './components/RegisterForm'
import { observer } from 'mobx-react'
import store from './store/store'

const Register = observer(class Register extends Component {
  register = (e) => {
    e.preventDefault()

    store.loading = true

    const email = document.getElementsByName('email')[0].value
    const password = document.getElementsByName('password')[0].value

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)

    promise
      .then(() => store.loading = false)
      .then(() => store.errorState = 'none')
      .then(() => browserHistory.push('/'))

      .catch(e => {
        store.errorState = 'initial'
        store.errorMessage = e.message
        store.loading = false
      })
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Column computer={5} largeScreen={5} tablet={10} mobile={16} textAlign='center'>
          <Card fluid raised>
            <Card.Content>
              <Header as='h2' color='grey'>
                Register for a new account today
              </Header>
            </Card.Content>
            <Card.Content extra>
              <RegisterForm
                register={this.register}
                errorState={store.errorState}
                errorMessage={store.errorMessage}
                loading={store.loading}
              />
              <Message>
                <Link to='/login'>Already a member?</Link>
              </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
})

export default Register
