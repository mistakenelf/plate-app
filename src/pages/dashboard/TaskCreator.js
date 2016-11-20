import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card'
import React, { Component } from 'react'

import { Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { css } from 'aphrodite'
import styles from './styles'

export default class TaskCreator extends Component {
  constructor(props) {
    super(props) 

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
      <Col md={4} lg={4} className={css(styles.paddingTop)}>
        <Card>
          <CardTitle title="Task Tracker" />
          <CardText>
            <h4>You have {this.props.tasks.length} tasks remaining</h4>
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

