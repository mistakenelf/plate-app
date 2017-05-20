import { gql } from 'react-apollo'

export default gql`
  mutation forgotPassword($email: String) {
    forgotPassword(email: $email)
  }
`
