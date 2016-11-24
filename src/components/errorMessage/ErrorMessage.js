import React from 'react'
import { Text } from 'rebass'

function ErrorMessage({open, message}) {
  const styles = {
    messageDisplay: {
      display: open
    },

    errorBlock: {
      backgroundColor: 'red',
      textAlign: 'center',
      color: 'white',
      padding: 10,
      borderRadius: 5
    }
  }

  return (
    <div style={styles.messageDisplay}>
      <div style={styles.errorBlock}>
        <Text>
          {message}
        </Text>
      </div>
    </div>
  )
}

export default ErrorMessage
