import { injectState, provideState } from 'freactal'

import Alert from '../../../components/Alert/Alert'
import ChangePasswordMutation from '../../../mutations/ChangePasswordMutation'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-apollo'

const wrapComponentWithState = provideState({
  initialState: () => ({
    showMessage: false
  }),
  effects: {
    showMessage: () => state => Object.assign({}, state, { showMessage: true })
  }
})

const updatePassword = (e, id, changePassword, showMessage) => {
  e.preventDefault()
  const newPassword = document.getElementById('newPassword').value
  changePassword(id, newPassword)
  showMessage()

  document.getElementById('newPassword').value = ''
  document.getElementById('confirmNewPassword').value = ''
}

const ChangePassword = wrapComponentWithState(
  injectState(({ state, effects, user, changePassword }) => {
    return (
      <div>
        <form
          onSubmit={e =>
            updatePassword(e, user.id, changePassword, effects.showMessage)}
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
        {state.showMessage && <Alert message="Password Changed" />}
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
  })
)

ChangePassword.propTypes = {
  user: PropTypes.object,
  changePassword: PropTypes.func
}

export default graphql(ChangePasswordMutation, {
  props: ({ mutate }) => ({
    changePassword: (id, password) => mutate({ variables: { id, password } })
  })
})(ChangePassword)
