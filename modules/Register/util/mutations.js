import { gql } from 'react-apollo';

export const registerMutation = gql`
  mutation register($firstName: String!, $lastName: String!, $username: String!, $password: String!) {
    register(firstName: $firstName, lastName: $lastName, username: $username, password: $password) {
      firstName
      lastName
      username
      password
    }
  }
`;
