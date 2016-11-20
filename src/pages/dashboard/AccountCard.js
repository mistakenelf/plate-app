import { Card, CardText, CardTitle } from 'material-ui/Card'

import { Col } from 'react-bootstrap'
import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function AccountCard() {
  return (
    <Col md={4} lg={4} className={css(styles.paddingTop)}>
      <Card>
        <CardTitle title="Your Account" subtitle="Manage your account" />
        <CardText>
          Your account and profile information will be here
        </CardText>
      </Card>
    </Col>
  )
}

export default AccountCard
