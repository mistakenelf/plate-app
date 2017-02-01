import { Button, Divider, Form, Grid, Icon } from 'semantic-ui-react'

export default () => (
  <div className='login-form'>
    <Grid centered>
      <Grid.Row>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <h3>Login Into Your Account</h3>
          <Form>
            <Form.Field>
              <input type='text' name='username' id='username' placeholder='username' required />
            </Form.Field>
            <Form.Field>
              <input type='text' name='email' id='email' placeholder='email' required />
            </Form.Field>
            <Button type='submit' primary>Register Now!</Button>
            <p><a href='#' className='link'>Forgot Password?</a></p>
          </Form>
        </Grid.Column>
        <Grid.Column computer={1} only='computer'>
          <Divider vertical>or</Divider>
        </Grid.Column>
        <Grid.Column computer={7} mobile={16}>
          <div className='buttons'>
            <Button color='facebook' style={{marginBottom: '15px', width: '300px'}}>
              <Icon name='facebook' /> Sign in with Facebook
            </Button>
            <br />
            <Button color='google plus' style={{marginBottom: '15px', width: '300px'}}>
              <Icon name='google plus' /> Sign in with Google Plus
            </Button>
            <br />
            <Button color='twitter' style={{width: '300px'}}>
              <Icon name='twitter' /> Sign in with Twitter
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx>{`
      .login-form {
        background-color: #F7F7F7;
        border-radius: 10px;
        padding: 50px;
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .link {
        margin-top: 10px;
        padding-top: 10px;
      }
      .buttons {
        margin-top: 50px;
      }
    `}</style>
  </div>
)
