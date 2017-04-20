import { gql } from 'react-apollo'

export const addPlateMutation = gql`
  mutation addPlate($name: String!, $description: String!, $thumbnail: String! $createdBy: String!) {
    addPlate(name: $name, description: $description, thumbnail: $thumbnail, createdBy: $createdBy) {
      name
      description
      thumbnail
    }
  }
`

export const removePlateMutation = gql`
  mutation removePlate($id: ID!) {
    removePlate(id: $id) {
      id
    }
  }
`

export const editPlateMutation = gql`
  mutation editPlate($id: ID!, $name: String!, $description: String!, $status: String!) {
    editPlate(id: $id, name: $name, description: $description, status: $status) {
      id
      name
      description,
      status
    }
  }
`
