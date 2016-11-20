import { Card, CardText, CardTitle } from 'material-ui/Card'
import { Col, Grid, Row } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function NotFound() {
  return (
    <Grid fluid className={css(styles.background)}>
      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
          <Card className={css(styles.notFoundMargin)}>
            <CardTitle title="404" subtitle="Page not found" titleColor="white" subtitleColor="white" />
            <CardText color="white">
              <h4>
                The page you are looking for has either been moved, or does
                not exist anymore. Please contact your administrator if you
                think this is an error. Thanks, Plate Team.
              </h4>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}

export default NotFound
