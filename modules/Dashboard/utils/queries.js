import { gql } from "react-apollo";

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

export const PlatesByNameQuery = gql`
  query allPlatesByName($name: String!) {
    platesByName(name: $name) {
      id
      name
      description
      thumbnail
    }
  }
`;
