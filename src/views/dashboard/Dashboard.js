import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  menuLayout: {
    marginTop: 10
  },

  cardSize: {
    height: 250
  },

  cardTitleGreen: {
    backgroundColor: '#50AE55'
  },

  cardBodyGreen: {
    backgroundColor: '#3C8D40'
  },

  cardTitleBlue: {
    backgroundColor: '#03A9F4'
  },

  cardBodyBlue: {
    backgroundColor: '#0288D1'
  },

  cardTitleTeal: {
    backgroundColor: '#80CBC4'
  },

  cardBodyTeal:{
    backgroundColor: '#4DB6AC'
  }
})

function Dashboard() {
  return (
    <Grid fluid>
      <Row>
        <Col md={3} className={css(styles.menuLayout)}>
          <Card className={css([styles.cardBodyGreen, styles.cardSize])}>
            <CardTitle className={css(styles.cardTitleGreen)} title="Card title" subtitle="Card subtitle" />
              <CardText className={css(styles.cardBodyGreen)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardText>
          </Card>
        </Col>
        <Col md={3} className={css(styles.menuLayout)}>
          <Card className={css([styles.cardBodyTeal, styles.cardSize])}>
            <CardTitle className={css(styles.cardTitleTeal)}title="Card title" subtitle="Card subtitle" />
              <CardText className={css(styles.cardBodyTeal)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardText>
          </Card>
        </Col>
        <Col md={3} className={css(styles.menuLayout)}>
          <Card className={css([styles.cardBodyBlue, styles.cardSize])}>
            <CardTitle className={css(styles.cardTitleBlue)} title="Card title" subtitle="Card subtitle" />
              <CardText className={css(styles.cardBodyBlue)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardText>
          </Card>
        </Col>
        <Col md={3} className={css(styles.menuLayout)}>
          <Card className={css(styles.cardSize)}>
            <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}

export default Dashboard
