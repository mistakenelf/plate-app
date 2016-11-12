import React from 'react'
import { Col } from 'react-bootstrap'
import { css } from 'aphrodite'
import styles from './styles'

function Footer() {
  return (
    <Col sm={12} className={css(styles.footer)}>
      <h1>This is a footer</h1>
    </Col>
  )
}

export default Footer