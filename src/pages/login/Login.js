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

import ErrorMessage from '../../components/errorMessage/ErrorMessage'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorState: 'none',
      errorMessage: ''
    }
  }

  userLogin = (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().signInWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))

      .catch((e) =>
        this.setState({
          errorState: 'initial',
          errorMessage: e.message
        })
      )
  }

  render() {
    const styles = {
      formMargin: {
        marginTop: '5%'
      },

      panelTheme: {
        backgroundColor: '#3F51B5',
        color: 'white'
      },

      loginButton: {
        backgroundColor: '#E91E63',
        color: 'white',
        width: '100%'
      }
    }

    return (
      <Flex justify='center' style={styles.formMargin}>
        <Box p={2} sm={12} md={6} lg={4} col={12}>
          <form onSubmit={this.userLogin}>
            <Panel theme='info'>
              <PanelHeader
                inverted
                style={styles.panelTheme}
                theme='default'
                >
                Login
              </PanelHeader>
              <ErrorMessage
                open={this.state.errorState}
                message={this.state.errorMessage}
                />
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
                <Button type='submit' style={styles.loginButton}>Login</Button>
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
