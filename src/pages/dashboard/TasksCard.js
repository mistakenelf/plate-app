import React, { Component } from 'react'
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import { Col } from 'react-bootstrap'
import { css } from 'aphrodite'
import styles from './styles'

export default class TasksCard extends Component {
  constructor() {
    super() 

    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ]

    return (
      <Col md={6} lg={6} className={css(styles.paddingTop)}>
        <Card>
          <CardTitle title="Your Tasks" subtitle="Manage your tasks" />
          <CardText>
            Your tasks will appear here
          </CardText>
          <CardActions>
            <RaisedButton label="Create New Task" fullWidth={true} secondary={true} onTouchTap={this.handleOpen} />
          </CardActions>
        </Card>
        <Dialog
          title="Create New Task"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          This will be where you create a new task
        </Dialog>
      </Col>
    )
  }
}

