import Card from '../../../components/Card/Card'
import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

export default function NoPlatesFound({ user }) {
  return (
    <Card style={{ textAlign: 'center', marginTop: 20 }}>
      <div className="content">
        Hey {user.username}! You currently have no plates on your dashboard.
      </div>
      <div>
        {moment().format('dddd, MMMM Do YYYY')}
      </div>
      <style jsx>{`
        .content {
          font-size: 20px;
          font-weight: bolder;
        }
      `}</style>
    </Card>
  )
}

NoPlatesFound.propTypes = {
  user: PropTypes.object
}
