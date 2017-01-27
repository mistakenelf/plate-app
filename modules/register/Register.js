import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default () => (
  <div className='register-form'>
    <h1 style={{textAlign: 'center'}}>Sign Up Now</h1>
    <h1 style={{textAlign: 'center'}}>to Begin Serving Plates</h1>
    <p style={{textAlign: 'center', marginTop: 20}}>Plate makes task management more simplified
    for your every day routine, it's free too!</p>

    <div className='text-fields'>
      <TextField
        hintText='Email'
      />
      <br /><br />
      <TextField
        hintText='Password'
      />
      <br />
      <RaisedButton backgroundColor='green' label='Register Now!' primary style={{marginTop: 50}} />
    </div>
    <style jsx>{`
      .register-form {
        padding: 20px;
        border-radius: 10px;
        width: 500px;
        height: 500px;
        background-color: #FAFAFA;
        margin-left: auto;
        margin-right: auto;
      }

      .text-fields {
        margin-top: 50px;
        text-align: center;
      }
    `}</style>
  </div>
)
