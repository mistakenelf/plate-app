import { gql } from 'react-apollo';

export const AllPlatesQuery = gql`
  query {
    AllPlates {
      id
      name
      description
      thumbnail
      completed
    }
  }
`;
