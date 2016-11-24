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
import React, { Component } from 'react'

import { Link } from 'react-router'
import { browserHistory } from 'react-router'

export default class ForgotPassword extends Component {
  forgotPassword(e) {
    e.preventDefault()

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => browserHistory.push('/login'))

      .catch((e) =>
        console.log(e.message)
      )
  }

  render() {
    return (
      <Flex justify='center'>
        <Box p={2} sm={12} md={6} lg={4} col={12}>
          <form onSubmit={this.registerUser}>
            <Panel theme='info'>
              <PanelHeader
                inverted
                theme='default'
                >
                Forgot Password
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
              <PanelFooter>
                <Button type='submit' style={{ width: '100%' }}>Forgot Password</Button>
              </PanelFooter>
              <br />
              <Text is={Link} to={'/login'}>
                Remember It Now?
              </Text>
            </Panel>
          </form>
        </Box>
      </Flex>
    )
  }
}
