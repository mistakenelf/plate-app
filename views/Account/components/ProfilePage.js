import PropTypes from 'prop-types'
import React from 'react'

const ProfilePage = ({ user }) => {
  return (
    <table>
      <caption>Profile</caption>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="FirstName">{user.firstName}</td>
          <td data-label="LastName">{user.lastName}</td>
          <td data-label="Username">{user.username}</td>
          <td data-label="Email">{user.email || 'No email found'}</td>
        </tr>
      </tbody>
    </table>
  )
}

ProfilePage.propTypes = {
  user: PropTypes.object
}

export default ProfilePage
