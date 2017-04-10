// @flow

import { gql } from 'react-apollo';

export const PlatesQuery = gql`
  query {
    plates {
      id
      name
      description
      thumbnail
      completed
    }
  }
`;
