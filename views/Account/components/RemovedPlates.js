import PropTypes from 'prop-types'
import React from 'react'

const RemovedPlates = ({ user }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
      <table>
        <caption>Recover Plates</caption>
        <thead>
          <tr>
            <th>Plate Name</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

RemovedPlates.propTypes = {
  user: PropTypes.object
}

export default RemovedPlates
