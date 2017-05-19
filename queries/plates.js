import { gql } from 'react-apollo'

export default gql`
  query plates($username: String) {
    plates(username: $username) {
      id
      name
      description
      thumbnail
      status
      content
      createdBy
      dateCreated
      dateDue
    }
  }
`
