import React from 'react'
import { grey500 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  menuLayout: {
    backgroundColor: grey500,
    height: 200,
    width: '100%'
  }
})

function Dashboard() {
  return (
    <Grid fluid>
      <Row>
        <Col sm={12}>
          <Card className={css(styles.menuLayout)}>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}

export default Dashboard
