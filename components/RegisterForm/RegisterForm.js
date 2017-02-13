import { Button, Form, Grid } from 'semantic-ui-react'

export default () => (
  <Grid padded centered>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={10} computer={6} largeScreen={6}>
        <h3>Register</h3>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Input type='text' name='email' placeholder='email' label='Email' />
          <Form.Input type='password' name='password' placeholder='password' label='Password' />
          <Button primary fluid>Register</Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
