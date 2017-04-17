import { gql } from 'react-apollo'

export const savePlateContentMutation = gql`
  mutation savePlateContent($id: ID!, $content: String!) {
    savePlateContent(id: $id, content: $content) {
      id
      content
    }
  }
`
