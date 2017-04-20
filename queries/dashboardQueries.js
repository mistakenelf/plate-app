import { gql } from 'react-apollo'

export const PlatesQuery = gql`
  query plates($username: String) {
    plates(username: $username) {
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
