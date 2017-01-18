import { Message } from 'semantic-ui-react'
import { PropTypes } from 'react'

const propTypes = {
  open: PropTypes.string,
  message: PropTypes.string
}

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

ErrorMessage.propTypes = propTypes

export default ErrorMessage
