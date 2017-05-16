import BackButton from '../../components/BackButton/BackButton'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <BackButton color="white" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
