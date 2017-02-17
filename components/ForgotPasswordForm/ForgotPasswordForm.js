import { Card, CardText } from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const forgotPassword = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <div className='container-fluid' style={{marginTop: 20}}>
    <div className='row'>
      <div className='col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4'>
        <Card>
          <CardText>
            <h3>Forgot Password</h3>
            <form onSubmit={forgotPassword}>
              <TextField hintText='email' id='email' type='text' fullWidth />
              <RaisedButton
                secondary
                fullWidth
                label='Forgot Password'
                type='submit'
              />
            </form>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
)
