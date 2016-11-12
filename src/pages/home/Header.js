import React from 'react'
import { css } from 'aphrodite'
import styles from './styles'
import { Col } from 'react-bootstrap'

function Header() {
  return (
    <Col sm={12} className={css(styles.hero)}>
      <h1 style={{color: "white", textAlign: "center", paddingTop: 100}}>Welcome To Plate</h1>
    </Col>
  )
}

export default Header