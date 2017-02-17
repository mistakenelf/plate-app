import { Card, CardText } from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const register = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <div className='container-fluid' style={{marginTop: 20}}>
    <div className='row'>
      <div className='col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4'>
        <Card>
          <CardText>
            <h3>Register</h3>
            <form onSubmit={register}>
              <TextField hintText='email' id='email' type='text' fullWidth />
              <TextField hintText='password' id='password' type='password' fullWidth />
              <RaisedButton
                secondary
                fullWidth
                label='Register'
                type='submit'
              />
            </form>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
)
