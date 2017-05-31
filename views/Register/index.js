import BackButton from '../../components/BackButton/BackButton'
import React from 'react'
import RegisterForm from './components/RegisterForm'

export default function Register() {
  return (
    <div>
      <BackButton color="white" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
