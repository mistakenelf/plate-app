import { Col, Grid, Panel, Row } from 'react-bootstrap'

import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'

function NotFound() {
  return (
    <Grid fluid className={css(styles.background)}>
      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
          <Panel header={<h3>Not Found</h3>} bsStyle="danger" className={css(styles.notFoundMargin)}>
            <h4>
              The page you are looking for has either been moved, or does
              not exist anymore. Please contact your administrator if you
              think this is an error. Thanks, Plate Team.
            </h4>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

export default NotFound


