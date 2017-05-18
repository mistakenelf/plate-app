import { injectState, provideState } from 'freactal'

import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import React from 'react'
import UpdateProfileMutation from '../../../mutations/UpdateProfileMutation'
import UserProfileQuery from '../../../queries/GetUserProfileQuery'
import debounce from 'lodash/debounce'
import { graphql } from 'react-apollo'

const wrapComponentWithState = provideState({
  initialState: props => ({
    fName: props.user.firstName,
    lName: props.user.lastName,
    eMail: props.user.email
  }),
  effects: {
    updateFName: (effects, value) => state =>
      Object.assign({}, state, { fName: value }),
    updateLName: (effects, value) => state =>
      Object.assign({}, state, { lName: value }),
    updateEMail: (effects, value) => state =>
      Object.assign({}, state, { eMail: value })
  }
})

const profileUpdate = async (
  id,
  updateProfile,
  updateFName,
  updateLName,
  updateEMail
) => {
  const firstName = document.getElementById('firstName').value
  updateFName(firstName)
  const lastName = document.getElementById('lastName').value
  updateLName(lastName)
  const email = document.getElementById('email').value
  updateEMail(email)
  const data = await updateProfile(id, firstName, lastName, email)
  Cookies.set('token', data.data.updateProfile, { path: '/', expires: 7 })
}

const ProfilePage = wrapComponentWithState(
  injectState(({ state, effects, user, updateProfile }) => {
    return (
      <form>
        <fieldset>
          <legend>My Profile</legend>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="first name"
              value={state.fName}
              onChange={() =>
                profileUpdate(
                  user.id,
                  updateProfile,
                  effects.updateFName,
                  effects.updateLName,
                  effects.updateEMail
                )}
              required
            />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="last name"
              value={state.lName}
              onChange={() =>
                profileUpdate(
                  user.id,
                  updateProfile,
                  effects.updateFName,
                  effects.updateLName,
                  effects.updateEMail
                )}
              required
            />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              defaultValue={user.username}
              disabled
            />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              value={state.eMail}
              onChange={() =>
                profileUpdate(
                  user.id,
                  updateProfile,
                  effects.updateFName,
                  effects.updateLName,
                  effects.updateEMail
                )}
              required
            />
          </div>
        </fieldset>
        <style jsx>{`
        .input-label {
          width: 100px;
        }
      `}</style>
      </form>
    )
  })
)

ProfilePage.propTypes = {
  user: PropTypes.object,
  updateProfile: PropTypes.func
}

export default graphql(UpdateProfileMutation, {
  props: ({ mutate }) => ({
    updateProfile: (id, firstName, lastName, email) => {
      return mutate({
        variables: { id, firstName, lastName, email },
        optimisticResponse: {
          __typename: 'Mutation',
          updateProfile: {
            __typename: 'User',
            id,
            firstName,
            lastName,
            email
          }
        }
      })
    }
  }),
  options: () => ({
    refetchQueries: [
      {
        query: UserProfileQuery,
        variables: { token: Cookies.get('token') }
      }
    ]
  })
})(ProfilePage)
