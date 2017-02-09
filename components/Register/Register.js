import { Button, Dimmer, Divider, Form, Icon } from 'semantic-ui-react'

export default () => (
  <div>
    <Dimmer active={false}
      onClickOutside={() => console.log('closing')}
      page
    >
      <div className='register-form'>
        <Icon name='add user' size='huge' />
        <h3 style={{ marginTop: '10px', marginBottom: '0px' }}>Register</h3>
        <h5 style={{ marginTop: '5px', marginBottom: '25px' }}>Sign up for free.</h5>
        <Form method='post'>
          <Form.Field>
            <input type='text' name='username' id='username' placeholder='username' required />
          </Form.Field>
          <Form.Field>
            <input type='text' name='email' id='email' placeholder='email' required />
          </Form.Field>
          <Form.Field>
            <input type='password' name='password' id='password' placeholder='password' required />
          </Form.Field>
          <Form.Field>
            <input type='password' name='confirmPassword' id='confirmPassword' placeholder='confirm password' required />
          </Form.Field>
          <Divider />
          <Button type='submit' primary>Register Now!</Button>
        </Form>
      </div>
    </Dimmer>
    <style jsx>{`
      .register-form {
        color: black;
        padding: 20px;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        border-radius: 5px;
        background-color: #FAFAFA;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        width: 400px;
      }
      @media only screen and (max-width: 660px) {
        .register-form {
          width: 95%;
          padding-right: 10px;
          padding-left: 10px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
    `}</style>
  </div>
)
