import { gql } from 'react-apollo'

export default gql`
  query getUserProfile($accesstoken: String) {
    getUserProfile(accesstoken: $accesstoken) {
      id
      firstName
      lastName
      username
      email
      dateSignedUp
    }
  }
`
