import PropTypes from 'prop-types'
import React from 'react'

const forgotPassword = e => {
  e.preventDefault()
  const email = document.getElementById('email').value
  console.log(email)
}

const ForgotPasswordForm = () => {
  return (
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
      <style jsx>{`
        .input-label {
          width: 80px;
        }
      `}</style>
    </form>
  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default ForgotPasswordForm
