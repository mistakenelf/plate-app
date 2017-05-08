import BackButton from '../../components/BackButton/BackButton'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <BackButton color="white" />
      <div className="container">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

export default ForgotPassword
