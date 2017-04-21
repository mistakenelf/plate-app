import { Card, CardText } from 'material-ui/Card'

import ErrorIcon from 'material-ui/svg-icons/alert/error'
import IconButton from 'material-ui/IconButton'
import React from 'react'
import { red500 } from 'material-ui/styles/colors'

const styles = {
  largeIcon: {
    width: 80,
    height: 80,
    color: red500
  },
  large: {
    width: 120,
    height: 120,
    padding: 20
  }
}

const Unauthorized = () => {
  return (
    <div className="container-fluid">
      <Card style={{ borderRadius: 10, textAlign: 'center' }}>
        <CardText>
          <IconButton iconStyle={styles.largeIcon} style={styles.large}>
            <ErrorIcon />
          </IconButton>
          <br />
          <div className="content">
            You do not have permissions to view this page.
            Please login or contact your administrator if you think this is an error
          </div>
        </CardText>
        <style jsx>
          {`
          .content {
            font-size: 20px;
            font-weight: bolder;
          }
        `}
        </style>
      </Card>
    </div>
  )
}

export default Unauthorized
