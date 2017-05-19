import { gql } from 'react-apollo'

export default gql`
  mutation contactUs($email: String, $name: String, $message: String) {
    contactUs(email: $email, name: $name, message: $message) {
      email
      name
      message
    }
  }
`
