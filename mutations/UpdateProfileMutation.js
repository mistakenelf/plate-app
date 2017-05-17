import { gql } from 'react-apollo'

export default gql`
  mutation updateProfile($id: ID, $firstName: String, $lastName: String, $email: String) {
    updateProfile(id: $id, firstName: $firstName, lastName: $lastName, email: $email) {
      id
      __typename
      firstName
      lastName
      email
    }
  }
`
