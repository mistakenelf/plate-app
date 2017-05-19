import { gql } from 'react-apollo'

export default gql`
  query recoveredPlates($username: String) {
    recoveredPlates(username: $username) {
      id
      name
      description
      thumbnail
      status
      content
      createdBy
      dateDeleted
    }
  }
`
