import { gql } from 'react-apollo'

export default gql`
  mutation removeRecoveredPlate($id: ID!) {
    removeRecoveredPlate(id: $id) {
      id
    }
  }
`
