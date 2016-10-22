import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'

export default class Register extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        browserHistory.push('/')
      } else {
        console.log('Error logging in')
      }
    })
  }

  registerUser() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const promise = firebase.auth().createUserWithEmailAndPassword(email, password)

    promise.catch(e => console.log(e.message))
  }

  render() {
    return (
      <Card>
        <CardTitle title="Register" subtitle="Welcome To Plate" />
        <CardText>
          <TextField hintText="First Name" id="firstName" fullWidth={true} />
          <br />
          <TextField hintText="Last Name" id="lastName" fullWidth={true} />
          <br />
          <TextField hintText="Email" id="email" fullWidth={true} />
          <br />
          <TextField hintText="Password" id="password" fullWidth={true} type="password" />
          <br />
          <RaisedButton label="Register" secondary={true} fullWidth={true} onClick={this.registerUser} />
        </CardText>
      </Card>
    )
  }
}
