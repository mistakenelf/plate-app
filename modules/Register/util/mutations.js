import { gql } from 'react-apollo';

export const registerMutation = gql`
  mutation Register($firstName: String!, $lastName: String!, $username: String!, $password: String!) {
    Register(firstName: $firstName, lastName: $lastName, username: $username, password: $password) {
      firstName
      lastName
      username
      password
    }
  }
`;
