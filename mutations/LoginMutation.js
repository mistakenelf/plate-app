import { gql } from 'react-apollo'

export default gql`
  mutation login($username: String, $password: String) {
    login(username: $username, password: $password)
  }
`
