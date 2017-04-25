import { gql } from 'react-apollo'

export default gql`
  mutation editPlate($id: ID!, $name: String!, $description: String!, $status: String!) {
    editPlate(id: $id, name: $name, description: $description, status: $status) {
      id
      __typename
      name
      description,
      status
    }
  }
`
