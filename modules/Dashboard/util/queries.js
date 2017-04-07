import { gql } from 'react-apollo';

export const AllPlatesQuery = gql`
  query {
    allPlates {
      id
      name
      description
      thumbnail
      completed
    }
  }
`;
