import { gql } from 'react-apollo'

export const generateToken = gql`
  mutation {
    generateToken
  }
`
