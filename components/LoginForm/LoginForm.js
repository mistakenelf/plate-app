import { Button, Divider, Form, Grid, Icon } from 'semantic-ui-react'

export default () => (
  <div className='login-form'>
    <Grid divided='vertically'>
      <Grid.Row>
        <Divider vertical>or</Divider>
        <Grid.Column computer={8} mobile={16}>
          <h3>Login Into Your Account</h3>
          <Form>
            <Form.Field style={{width: '300px'}}>
              <input type='text' name='username' id='username' placeholder='username' required />
            </Form.Field>
            <Form.Field style={{width: '300px', marginTop: '20px', marginBottom: '20px'}}>
              <input type='text' name='email' id='email' placeholder='email' required />
            </Form.Field>
            <Button type='submit' primary style={{width: '300px'}}>Register Now!</Button>
            <p><a href='#' className='link'>Forgot Password?</a></p>
          </Form>
        </Grid.Column>
        <Grid.Column computer={8} mobile={16}>
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
        padding-top: 30px;
        padding-left: 40px;
        padding-right: 40px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 140px;
        width: 60%;
        height: 320px;
        background-color: #F7F7F7;
        border-radius: 10px;
      }
      .link {
        margin-top: 10px;
        padding-top: 10px;
        float: right;
      }
      .buttons {
        margin-top: 50px;
        float: right;
      }
    `}</style>
  </div>
)
