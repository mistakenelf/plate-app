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

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorState: 'none',
      errorMessage: ''
    }
  }

  registerUser = (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)

    promise
      .then(() => browserHistory.push('/'))

      .catch(e =>
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

      registerButton: {
        backgroundColor: '#E91E63',
        color: 'white',
        width: '100%'
      }
    }

    return (
      <div>
        <Flex justify='center' style={styles.formMargin}>
          <Box p={2} sm={12} md={6} lg={4} col={12}>
            <form onSubmit={this.registerUser}>
              <Panel theme='info'>
                <PanelHeader
                  style={styles.panelTheme}
                  inverted
                  theme='default'
                  >
                  Register
              </PanelHeader>
                <Input
                  label='First Name'
                  id='firstName'
                  name='firstName'
                  placeholder='Please enter your first name'
                  rounded
                  required
                  type='text'
                  />
                <Input
                  label='Last Name'
                  id='lastName'
                  name='lastName'
                  placeholder='Please enter your last name'
                  rounded
                  required
                  type='text'
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
                  <Button type='submit' style={styles.registerButton}>Register</Button>
                </PanelFooter>
                <br />
                <Text is={Link} to={'/login'}>
                  Already A Member?
              </Text>
              </Panel>
            </form>
          </Box>
        </Flex>
        <Flex justify='center' wrap>
          <Box p={2} sm={12} md={6} lg={4} col={12}>
            <ErrorMessage
              open={this.state.errorState}
              message={this.state.errorMessage}
              />
          </Box>
        </Flex>
      </div>
    )
  }
}
