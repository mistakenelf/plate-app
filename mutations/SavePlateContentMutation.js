import { gql } from 'react-apollo'

export default gql`
  mutation savePlateContent($id: ID!, $content: String!) {
    savePlateContent(id: $id, content: $content) {
      id
      content
    }
  }
`
