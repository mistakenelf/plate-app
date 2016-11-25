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

import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorState: 'none',
      errorMessage: ''
    }
  }

  forgotPassword = (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value

    const promise = firebase.auth().sendPasswordResetEmail(email)

    promise
      .then(() => browserHistory.push('/login'))

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

      forgotPasswordButton: {
        backgroundColor: '#E91E63',
        color: 'white',
        width: '100%'
      }
    }

    return (
      <Flex justify='center' style={styles.formMargin}>
        <Box p={2} sm={12} md={6} lg={4} col={12}>
          <form onSubmit={this.forgotPassword}>
            <Panel theme='info'>
              <PanelHeader
                style={styles.panelTheme}
                inverted
                theme='default'
                >
                Forgot Password
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
              <PanelFooter>
                <Button type='submit' style={styles.forgotPasswordButton}>Forgot Password</Button>
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
