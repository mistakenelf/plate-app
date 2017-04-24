import { gql } from 'react-apollo'

export default gql`
  query getUserProfile($token: String!) {
    getUserProfile(token: $token) {
      firstName
      lastName
      username
      id
    }
  }
`
