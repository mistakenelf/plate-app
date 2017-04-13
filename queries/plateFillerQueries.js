import { gql } from 'react-apollo';

export const getPlateData = gql`
  query plate($id: ID!) {
    plate(id: $id) {
      name
      description
      thumbnail
      status
      content
    }
  }
`;
