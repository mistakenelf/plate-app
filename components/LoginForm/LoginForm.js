import Link from 'next/link'
import TextField from 'material-ui/TextField'

const login = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default ({ messageOpen, showMessage, hideMessage }) => (
  <div className='container-fluid'>
    <div className='row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
        <h1 style={{ color: 'white', marginBottom: '50px' }}>Login</h1>
        <form onSubmit={login}>
          <div className='text-field-email'>
            <TextField
              hintText='email'
              id='email'
              hintStyle={{ color: 'white' }}
              type='text'
              inputStyle={{ color: 'white' }}
              autoComplete={'off'}
              fullWidth
              required
            />
          </div>
          <div className='text-field-password'>
            <TextField
              hintText='password'
              id='password'
              autoComplete={'off'}
              inputStyle={{ color: 'white' }}
              hintStyle={{ color: 'white' }}
              type='password'
              fullWidth
              required
            />
          </div>
          <button type='submit' className='submit-button'>
            <div className='button-text'>
              <h3>Login</h3>
            </div>
          </button>
        </form>
        <div className='forgot-password'>
          <Link prefetch href='/forgotPassword'><a>Forgot Password?</a></Link>
        </div>
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
      .forgot-password a {
        color: white;
        text-decoration: none;
      }
      .full-height {
        height: 90vh;
      }
      .submit-button {
        background: none;
        border: 1px solid white;
        border-radius: 3px;
        left: 150px;
        top: 80px;
        width: 30%;
        height: 30px;
        margin-top: 30px;
      }
      .button-text {
        color: white;
      }
    `}</style>
  </div>
)
