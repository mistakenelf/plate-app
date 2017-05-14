import PropTypes from 'prop-types'
import React from 'react'

const AccountInfo = ({ user }) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
        <table>
          <caption>Account Info</caption>
          <thead>
            <tr>
              <th>Current Plan</th>
              <th>Plan Start Date</th>
              <th>Plan Experiation Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Plan">{user.plan || 'Free'}</td>
              <td data-label="start">{user.startDate || Date()}</td>
              <td data-label="end">{user.planEnd || Date()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

AccountInfo.propTypes = {
  user: PropTypes.object
}

export default AccountInfo
