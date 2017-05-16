import { gql } from 'react-apollo'

export default gql`
  mutation recoverPlate($id: ID, $name: String!, $description: String!, $thumbnail: String!, $status: String!, $content: String, $createdBy: String!) {
    recoverPlate(id: $id, name: $name, description: $description, thumbnail: $thumbnail, status: $status, content: $content, createdBy: $createdBy) {
      id
      name
      __typename
      description
      thumbnail
      status
      content
    }
  }
`
