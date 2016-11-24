import { Col, Grid, Row } from 'react-bootstrap'
import { Panel, PanelHeader, Text } from 'rebass'

import React from 'react'
import { StyleSheet } from 'aphrodite'
import { css } from 'aphrodite'

const styles = StyleSheet.create({
  notFoundMargin: {
    marginTop: '10%',
  }
})

function NotFound() {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4} className={css(styles.notFoundMargin)}>
          <Panel theme='info'>
            <PanelHeader
              inverted
              theme='error'
              >
              Page Not Found
            </PanelHeader>
            <Text>
              The page you are looking for has either been moved, or does
              not exist anymore. Please contact your administrator if you
              think this is an error. Thanks, Plate Team.
            </Text>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

export default NotFound



