import React, { Component } from 'react'

import Alert from '../../../components/Alert/Alert'
import ChangePasswordMutation from '../../../mutations/changePassword'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

class ChangePassword extends Component {
  static propTypes = {
    user: PropTypes.object,
    changePassword: PropTypes.func
  }

  state = {
    showMessage: false,
    showMatchError: false
  }

  showMessage = () => {
    this.setState({
      showMessage: true
    })
  }

  showMatchError = () => {
    this.setState({
      showMatchError: true
    })
  }

  clearErrors = () => {
    this.setState({
      showMessage: false,
      showMatchError: false
    })
  }

  updatePassword = (e, id, changePassword) => {
    e.preventDefault()
    const newPassword = document.getElementById('newPassword').value
    const confirmNewPassword = document.getElementById('confirmNewPassword')
      .value

    if (confirmNewPassword !== newPassword) {
      this.showMatchError()
      return false
    } else {
      changePassword(id, newPassword)
      this.showMessage()
      document.getElementById('newPassword').value = ''
      document.getElementById('confirmNewPassword').value = ''
    }
  }

  render() {
    const { user, changePassword } = this.props

    return (
      <div>
        <form
          onFocus={() => this.clearErrors()}
          onSubmit={e => this.updatePassword(e, user.id, changePassword)}
        >
          <fieldset>
            <legend>Change Password</legend>
            <div className="input-group fluid">
              <label className="input-label" htmlFor="newPassword">
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="new password"
                required
              />
            </div>
            <div className="input-group fluid">
              <label className="input-label" htmlFor="confirmNewPassword">
                Confirm New Password:
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                placeholder="confirm new password"
                required
              />
            </div>
            <div className="input-group fluid">
              <button type="submit" className="primary">Change Password</button>
            </div>
          </fieldset>
        </form>
        {this.state.showMessage && <Alert message="Password Changed" />}
        {this.state.showMatchError && <Alert message="Passwords Much Match" />}
        <style jsx>{`
          .input-label {
            width: 80px;
          }
          a {
            text-decoration: none;
          }
          .error-text {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

export default graphql(ChangePasswordMutation, {
  props: ({ mutate }) => ({
    changePassword: (id, password) => mutate({ variables: { id, password } })
  })
})(ChangePassword)
