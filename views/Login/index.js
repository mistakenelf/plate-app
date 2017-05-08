import BackButton from '../../components/BackButton/BackButton'
import LoginForm from './components/LoginForm'
import React from 'react'

const Login = () => {
  return (
    <div>
      <BackButton color="white" />
      <div className="container">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
