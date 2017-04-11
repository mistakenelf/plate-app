import { gql } from 'react-apollo';

export const addPlateMutation = gql`
  mutation addPlate($name: String!, $description: String!, $thumbnail: String!) {
    addPlate(name: $name, description: $description, thumbnail: $thumbnail) {
      name
      description
      thumbnail
    }
  }
`;

export const removePlateMutation = gql`
  mutation removePlate($id: ID!) {
    removePlate(id: $id) {
      id
    }
  }
`;

export const completePlateMutation = gql`
  mutation completePlate($id: ID!, $completed: Boolean!) {
    completePlate(id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

export const editPlateMutation = gql`
  mutation editPlate($id: ID!, $name: String!, $description: String!) {
    editPlate(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
