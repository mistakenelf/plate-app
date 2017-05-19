import { gql } from 'react-apollo'

export default gql`
  mutation register($firstName: String!, $lastName: String!, $username: String!, $password: String! $email: String!) {
    register(firstName: $firstName, lastName: $lastName, username: $username, password: $password, email: $email)
  }
`
