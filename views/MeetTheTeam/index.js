import React, { Component } from 'react'

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

  closeModal = () => {
    this.setState({
      displayModal: false
    })
  }

  render() {
    return (
      <div>
        <button
          label="Primary"
          primary
          onTouchTap={this.openModal}
          style={{ marginTop: 80 }}
        />
        {this.state.displayModal && <TestModal closeModal={this.closeModal} />}
      </div>
    )
  }
}

export default MeetTheTeam
