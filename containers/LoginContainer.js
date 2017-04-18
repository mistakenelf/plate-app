import BackButton from '../components/BackButton/BackButton'
import LoginForm from '../components/Login/LoginForm'
import PropTypes from 'prop-types'
import React from 'react'
import { generateToken } from '../mutations/loginMutations'
import { graphql } from 'react-apollo'

const LoginContainer = ({ generateToken }) => {
  return (
    <div>
      <BackButton color="white" />
      <LoginForm generateToken={generateToken} />
    </div>
  )
}

LoginContainer.propTypes = {
  generateToken: PropTypes.func
}

export default graphql(generateToken, {
  props: ({ mutate }) => ({
    generateToken: () => mutate({})
  })
})(LoginContainer)
