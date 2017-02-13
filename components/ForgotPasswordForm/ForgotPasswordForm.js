import { Button, Form, Grid } from 'semantic-ui-react'

export default () => (
  <Grid padded centered>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={10} computer={6} largeScreen={6}>
        <h2>Retrieve Password</h2>
        <p>
          Enter the email associated with your account
          and a link will be sent to your email
          with instructions on resetting your password.
        </p>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Input type='text' name='email' placeholder='email' label='Email' />
          <Button primary fluid>Reset</Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
