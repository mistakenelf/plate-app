import { gql } from 'react-apollo'

export const loginMutation = gql`
  mutation login($username: String) {
    login(username: $username) {
      id
      username
      firstName
      lastName
    }
  }
`
