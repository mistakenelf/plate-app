import ForgotPasswordMutation from '../../../mutations/forgotPassword'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-apollo'

const userForgotPassword = async (e, forgotPassword) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  await forgotPassword(email)
}

const ForgotPasswordForm = ({ forgotPassword }) => {
  return (
    <form onSubmit={e => userForgotPassword(e, forgotPassword)}>
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
  handleSubmit: PropTypes.func,
  forgotPassword: PropTypes.func
}

export default graphql(ForgotPasswordMutation, {
  props: ({ mutate }) => ({
    forgotPassword: email => mutate({ variables: { email } })
  })
})(ForgotPasswordForm)
