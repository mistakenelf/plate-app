import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import React from 'react'

const Unauthorized = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <Card style={{ textAlign: 'center' }}>
            <Icon
              style={{ fontSize: 70, color: 'red' }}
              type="fa fa-exclamation-triangle"
            />
            <div className="content">
              You do not have permissions to view this page.
              Please login or contact your administrator if you think this is an error
            </div>
          </Card>
        </div>
      </div>
      <style jsx>{`
        .content {
          font-size: 20px;
          font-weight: bolder;
        }
      `}</style>
    </div>
  )
}

export default Unauthorized
