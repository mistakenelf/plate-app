import { Card, Grid, Header, Message } from 'semantic-ui-react'

import { Component } from 'react'
import Link from 'next/prefetch'
import LoginForm from './components/LoginForm'
import Router from 'next/router'
import { observer } from 'mobx-react'
import store from './store/store'

const Login = observer(class Login extends Component {
  userLogin = (e) => {
    e.preventDefault()

    store.loading = true
    Router.push('/')
    store.loading = false
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Column computer={5} largeScreen={5} tablet={10} mobile={16} textAlign='center'>
          <Card fluid raised>
            <Card.Content>
              <Header as='h2' color='grey'>
                Login to your account
              </Header>
            </Card.Content>
            <Card.Content extra>
              <LoginForm
                userLogin={this.userLogin}
                errorState={store.errorState}
                errorMessage={store.errorMessage}
                loading={store.loading}
              />
              <Message>
                <Link href='/forgotPassword'>Forgot your password?</Link>
              </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
})

export default Login
