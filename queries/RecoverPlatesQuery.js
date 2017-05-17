import { gql } from 'react-apollo'

export default gql`
  query recoverPlates($username: String) {
    recoverPlates(username: $username) {
      id
      name
      description
      thumbnail
      status
      content
      createdBy
    }
  }
`
