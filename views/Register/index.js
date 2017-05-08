import BackButton from '../../components/BackButton/BackButton'
import React from 'react'
import RegisterForm from './components/RegisterForm'

const Register = () => {
  return (
    <div>
      <BackButton color="white" />
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
