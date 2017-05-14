import { gql } from 'react-apollo'

export default gql`
  query getUserProfile($token: String!) {
    getUserProfile(token: $token) {
      id
      firstName
      lastName
      username
      email
      plan
    }
  }
`
