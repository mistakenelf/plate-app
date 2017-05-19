import { gql } from 'react-apollo'

export default gql`
  mutation changePassword($id: ID, $password: String) {
    changePassword(id: $id, password: $password)
  }
`
