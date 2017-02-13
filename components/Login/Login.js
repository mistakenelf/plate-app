import { Button, Form, Grid } from 'semantic-ui-react'

import Link from 'next/prefetch'

export default () => (
  <Grid padded centered>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={10} computer={6} largeScreen={6}>
        <h3>Login</h3>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Input type='text' name='email' placeholder='email' label='Email' />
          <Form.Input type='password' name='password' placeholder='password' label='Password' />
          <Button primary fluid>Login</Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={10} computer={6} largeScreen={6}>
        <Link href='/forgotPassword'><a>Forgot Password?</a></Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
