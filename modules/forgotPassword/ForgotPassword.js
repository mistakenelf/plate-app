import { Card, Grid, Header, Message } from 'semantic-ui-react'

import { Component } from 'react'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import Link from 'next/prefetch'
import Router from 'next/router'
import { observer } from 'mobx-react'
import store from './store/store'

@observer
class ForgotPassword extends Component {
  forgotPassword = (e) => {
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
                Forgot your password
              </Header>
            </Card.Content>
            <Card.Content extra>
              <ForgotPasswordForm
                forgotPassword={this.forgotPassword}
                errorState={store.errorState}
                errorMessage={store.errorMessage}
                loading={store.loading}
              />
            <Message>
              <Link href='/login'>Remember it now?</Link>
            </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ForgotPassword
