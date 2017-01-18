import { Card, Grid, Header, Message } from 'semantic-ui-react'

import { Component } from 'react'
import Link from 'next/prefetch'
import RegisterForm from './components/RegisterForm'
import Router from 'next/router'
import { observer } from 'mobx-react'
import store from './store/store'

const Register = observer(class Register extends Component {
  register = (e) => {
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
                <Link href='/login'>Already a member?</Link>
              </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
})

export default Register
