import PropTypes from 'prop-types'
import React from 'react'

const forgotPassword = e => {
  e.preventDefault()
  const email = document.getElementById('email').value
  console.log(email)
}

const ForgotPasswordForm = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
        <form onSubmit={e => forgotPassword(e)}>
          <fieldset>
            <legend>Forgot Password</legend>
            <div className="input-group fluid">
              <label className="input-label" htmlFor="username">
                Email:
              </label>
              <input type="email" id="email" placeholder="email" required />
            </div>
            <div className="input-group fluid">
              <button type="submit" className="primary">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
      <style jsx>{`
        .input-label {
          width: 80px;
        }
      `}</style>
    </div>
  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default ForgotPasswordForm
