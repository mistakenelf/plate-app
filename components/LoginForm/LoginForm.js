import { Card, CardText } from 'material-ui/Card'

import Link from 'next/link'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const login = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <div className='container-fluid' style={{marginTop: 20}}>
    <div className='row'>
      <div className='col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4'>
        <Card>
          <CardText>
            <h3>Login</h3>
            <form onSubmit={login}>
              <TextField hintText='email' id='email' type='text' fullWidth />
              <TextField hintText='password' id='password' type='password' fullWidth />
              <RaisedButton
                secondary
                fullWidth
                label='Login'
                type='submit'
              />
            </form>
            <Link prefetch href='/forgotPassword'><a>Forgot Password?</a></Link>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
)
