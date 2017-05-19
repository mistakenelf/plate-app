import { gql } from 'react-apollo'

export default gql`
  mutation removePlate($id: ID!) {
    removePlate(id: $id) {
      id
    }
  }
`
