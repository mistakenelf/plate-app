import React, { Component } from 'react'

import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import io from 'socket.io-client'

class PlateTalk extends Component {
  static propTypes = {
    messages: PropTypes.array,
    user: PropTypes.object
  }
  static defaultProps = {
    messages: []
  }

  // init state with the prefetched messages
  state = {
    field: '',
    messages: this.props.messages
  }

  // connect to WS server and listen event
  componentDidMount() {
    this.socket = io('http://localhost:3000/')
    this.socket.on('message', this.handleMessage)
  }

  // close socket connection
  componentWillUnmount() {
    this.socket.off('message', this.handleMessage)
    this.socket.close()
  }

  // add messages from server to the state
  handleMessage = message => {
    this.setState(state => ({ messages: state.messages.concat(message) }))
  }

  handleChange = event => {
    this.setState({ field: event.target.value })
  }

  // send messages to server and add them to the state
  handleSubmit = event => {
    event.preventDefault()

    // create message object
    const message = {
      id: new Date().getTime(),
      value: this.state.field,
      sender: this.props.user.username
    }

    // send object to WS server
    this.socket.emit('message', message)

    // add it to state and clean current input value
    this.setState(state => ({
      field: '',
      messages: state.messages.concat(message)
    }))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="header-container">
              <h1 className="header">Plate Talk</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="message-box">
              {this.state.messages.map(message => (
                <div className="message" key={message.id}>
                  <div className="user-text">
                    {'@' + message.sender}
                  </div>
                  <div className="message-body">{'- ' + message.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="message-bar">
              <form onSubmit={this.handleSubmit}>
                <TextField
                  id="message"
                  hintText="Enter your message here!"
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.field}
                />
                <RaisedButton type="submit" label="SEND" secondary fullWidth />
              </form>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .header-container {
              flex-direction: row;
              align-items: center;
              border-bottom: 4px solid #eee;
              margin-bottom: 20px;
              justify-content: space-between;
            }
            .message-bar {
              margin-bottom: 20px;
            }
            .message {
              margin-bottom: 15px;
            }
            .message-body {
              margin-left: 10px;
            }
            .user-text {
              font-weight: bolder;
              margin-right: 20px;
              margin-bottom: 10px;
            }
            .header {
              font-size: 35px;
              margin-top: 15px;
              margin-bottom: 15px;
              color: #424242;
              font-weight: bolder;
            }
            .message-box {
              border: 1px solid black;
              padding: 15px;
              min-height: 400px;
              max-height: 400px;
              width: 100%;
              overflow: scroll;
              margin-bottom: 50px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default PlateTalk
