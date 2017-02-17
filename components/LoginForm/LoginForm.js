import { Card, CardText } from 'material-ui/Card'

import Link from 'next/link'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const login = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <div className='container-fluid'>
    <div className='row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
        <Card>
          <CardText>
            <h3>Login</h3>
            <form onSubmit={login}>
              <div className='text-field-email'>
                <TextField hintText='email' id='email' type='text' autoComplete='off' fullWidth />
              </div>
              <div className='text-field-password'>
                <TextField hintText='password' id='password' type='password' fullWidth />
              </div>
              <RaisedButton
                secondary
                fullWidth
                label='Login'
                type='submit'
              />
            </form>
            <div className='forgot-password'>
              <Link prefetch href='/forgotPassword'><a>Forgot Password?</a></Link>
            </div>
          </CardText>
        </Card>
      </div>
    </div>
    <style jsx>{`
      .text-field-email {
        margin-bottom: 15px;
      }
      .text-field-password {
        margin-bottom: 15px;
      }
      .forgot-password {
        margin-top: 15px;
      }
      .full-height {
        height: 90vh;
      }
    `}</style>
  </div>
)
