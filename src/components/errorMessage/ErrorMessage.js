import { Message } from 'semantic-ui-react'
import React from 'react'

function ErrorMessage({ open, message }) {
  const styles = {
    messageDisplay: {
      display: open,
      marginBottom: 10
    }
  }

  return (
    <div style={styles.messageDisplay}>
      <Message color='red'>
        <p>{message}</p>
      </Message>
    </div>
  )
}

export default ErrorMessage
