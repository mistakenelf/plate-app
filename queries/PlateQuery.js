import { gql } from 'react-apollo'

export default gql`
  query plate($id: ID!) {
    plate(id: $id) {
      name
      description
      thumbnail
      status
      content
    }
  }
`
