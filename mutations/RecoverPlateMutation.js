import { gql } from 'react-apollo'

export default gql`
  mutation recoverPlate($name: String!, $description: String!, $thumbnail: String!, $status: String!, $content: String, $createdBy: String!) {
    recoverPlate(name: $name, description: $description, thumbnail: $thumbnail, status: $status, content: $content, createdBy: $createdBy) {
      name
      description
      thumbnail
      status
      content
      createdBy
    }
  }
`
