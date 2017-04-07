import { gql } from 'react-apollo';

export const addPlateMutation = gql`
  mutation AddPlate($name: String!, $description: String!, $thumbnail: String!) {
    AddPlate(name: $name, description: $description, thumbnail: $thumbnail) {
      name
      description
      thumbnail
    }
  }
`;

export const removePlateMutation = gql`
  mutation RemovePlate($id: ID!) {
    RemovePlate(id: $id) {
      id
    }
  }
`;

export const completePlateMutation = gql`
  mutation CompletePlate($id: ID!, $completed: Boolean!) {
    CompletePlate(id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

export const editPlateMutation = gql`
  mutation EditPlate($id: ID!, $name: String!, $description: String!) {
    EditPlate(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
