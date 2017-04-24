import { gql } from 'react-apollo'

export default gql`
  mutation addPlate($name: String!, $description: String!, $thumbnail: String! $createdBy: String!) {
    addPlate(name: $name, description: $description, thumbnail: $thumbnail, createdBy: $createdBy) {
      name
      description
      thumbnail
    }
  }
`
