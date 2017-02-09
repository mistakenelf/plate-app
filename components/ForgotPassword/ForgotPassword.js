import { Button, Form, Grid } from 'semantic-ui-react'

export default () => (
  <Grid textAlign='left'>
    <Grid.Row centered>
      <Grid.Column width={16} computer={8} widescreen={8} tablet={10} mobile={14}>
        <div className='forgot-password-form'>
          <h2>Retrieve Password</h2>
          <p>
            Enter the email associated with your account and a link will be sent
            to your email with instructions on resetting your password.
          </p>
          <Form onSubmit={() => console.log('submitted')}>
            <Form.Field>
              <input type='text' name='email' id='email' placeholder='email' required />
            </Form.Field>
            <Button type='submit' primary>Reset</Button>
          </Form>
        </div>
      </Grid.Column>
    </Grid.Row>
    <style jsx>{`
    .forgot-password-form {
      margin-top: 80px;
    }
  `}</style>
  </Grid>
)
