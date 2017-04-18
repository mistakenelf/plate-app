import { gql } from 'react-apollo'

export const generateToken = gql`
  mutation generateToken($username: String) {
    generateToken(username: $username)
  }
`
