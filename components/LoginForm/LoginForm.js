import { Button, Form, Grid } from 'semantic-ui-react'

import Link from 'next/prefetch'
import Message from '../Message/Message'

const login = (e, showMessage) => {
  e.preventDefault()
  showMessage()
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <Grid padded centered>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={10} computer={6} largeScreen={6}>
        {messageOpen &&
          <Grid.Row>
            <Grid.Column mobile={16} tablet={10} computer={6} largeScreen={6}>
              <Message message='Error processing your request' />
            </Grid.Column>
          </Grid.Row>
        }
        <h2>Login</h2>
        <Form onSubmit={(e) => login(e, showMessage)}>
          <Form.Input type='text' name='email' placeholder='email' label='Email' />
          <Form.Input type='password' name='password' placeholder='password' label='Password' />
          <Button primary fluid>Login</Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
    <Link href='/forgotPassword'><a>Forgot Password?</a></Link>
  </Grid>
)
