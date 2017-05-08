import Card from '../Card/Card'
import React from 'react'

const Unauthorized = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <Card style={{ textAlign: 'center' }}>
            <div className="content">
              You do not have permissions to view this page.
              Please login or contact your administrator if you think this is an error
            </div>
          </Card>
        </div>
      </div>
      <style jsx>
        {`
          .content {
            font-size: 20px;
            font-weight: bolder;
          }
        `}
      </style>
    </div>
  )
}

export default Unauthorized
