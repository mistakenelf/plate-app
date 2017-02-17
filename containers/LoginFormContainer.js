import { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { actions } from '../store/modules/loginForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LoginFormContainer extends Component {
  render () {
    const { messageOpen, showMessage, closeMessage } = this.props
    return (
      <LoginForm
        messageOpen={messageOpen}
        showMessage={showMessage}
        closeMessage={closeMessage}
      />
    )
  }
}

const mapStateToProps = ({ loginForm: { messageOpen } }) => {
  return {
    messageOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    showMessage: actions.showMessage,
    closeMessage: actions.closeMessage
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer)
