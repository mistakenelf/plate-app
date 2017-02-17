import { Card, CardText } from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const forgotPassword = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <div className='container-fluid'>
    <div className='row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
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
    <style jsx>{`
      .full-height {
        height: 90vh;
      }
    `}</style>
  </div>
)
