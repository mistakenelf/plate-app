import { gql } from 'react-apollo'

export const getUserProfile = gql`
  query getUserProfile($token: String!) {
    getUserProfile(token: $token) {
      firstName
      lastName
    }
  }
`
