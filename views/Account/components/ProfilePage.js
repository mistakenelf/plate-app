import PropTypes from 'prop-types'
import React from 'react'

const ProfilePage = ({ user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3>{user.firstName + ' ' + user.lastName}</h3>
        </div>
      </div>
    </div>
  )
}

ProfilePage.propTypes = {
  user: PropTypes.object
}

export default ProfilePage
