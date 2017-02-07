import { Button, Form, Grid } from 'semantic-ui-react'

export default () => (
  <div className='forgot-password-form'>
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <h2>Retrieve Password</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            Enter the email associated with your account and a link will be sent
            to your email with instructions on resetting your password.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16} computer={5} widescreen={5} tablet={16} mobile={16}>
          <Form>
            <Form.Field>
              <input type='text' name='email' id='email' placeholder='email' required />
            </Form.Field>
            <Button type='submit' primary>Reset</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx>{`
      .forgot-password-form {
        margin-top: 80px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)
