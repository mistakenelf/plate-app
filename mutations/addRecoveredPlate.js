import { gql } from 'react-apollo'

export default gql`
  mutation addRecoveredPlate($name: String!, $description: String!, $thumbnail: String!, $status: String!, $content: String! $createdBy: String!) {
    addRecoveredPlate(name: $name, description: $description, thumbnail: $thumbnail, status: $status, content: $content, createdBy: $createdBy) {
      name
      __typename
      description
      thumbnail
      status
      content
    }
  }
`
