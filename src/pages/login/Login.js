import * as firebase from 'firebase'

import { Box, Flex } from 'reflexbox'
import {
  Button,
  Input,
  Panel,
  PanelFooter,
  PanelHeader,
  Text,
} from 'rebass'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

export default class Login extends Component {
  userLogin(e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))

      .catch((e) =>
        console.log(e.message)
      )
  }

  render() {
    return (
      <Flex justify='center'>
        <Box p={2} sm={12} md={6} lg={4} col={12}>
          <form onSubmit={this.userLogin}>
            <Panel theme='info'>
              <PanelHeader
                inverted
                theme='default'
                >
                Login
              </PanelHeader>
              <Input
                label='Email'
                id='email'
                name='email'
                placeholder='Please enter your email'
                rounded
                required
                type='email'
                />
              <Input
                label='Password'
                id='password'
                name='password'
                placeholder='Please enter your password'
                rounded
                required
                type='password'
                />
              <PanelFooter>
                <Button type='submit' style={{ width: '100%' }}>Login</Button>
              </PanelFooter>
              <br />
              <Text is={Link} to={'/forgotPassword'}>
                Forgot password?
              </Text>
            </Panel>
          </form>
        </Box>
      </Flex>
    )
  }
}
