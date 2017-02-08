import { Button, Form, Grid } from 'semantic-ui-react'

import Router from 'next/router'
import { auth } from '../../utils/db'

const retrievePassword = (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value

  const promise = auth.sendPasswordResetEmail(email)

  promise
    .then(() => Router.push('/login'))
    .catch(() => console.log('user does not exist with this email'))
}

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
          <Form onSubmit={retrievePassword}>
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
