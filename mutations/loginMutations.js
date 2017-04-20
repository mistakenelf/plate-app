import { gql } from 'react-apollo'

export const loginMutation = gql`
  mutation login($username: String, $password: String) {
    login(username: $username, password: $password)
  }
`
