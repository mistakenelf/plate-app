import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TestModal from '../../components/TestModal/TestModal'

class MeetTheTeam extends Component {
  state = {
    displayModal: false
  }

  openModal = () => {
    this.setState({
      displayModal: true
    })
  }

  render() {
    return (
      <div>
        <RaisedButton label="Primary" primary onTouchTap={this.openModal} />
        {this.state.displayModal && <TestModal />}
      </div>
    )
  }
}

export default MeetTheTeam
