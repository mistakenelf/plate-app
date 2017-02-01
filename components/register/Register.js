import { Button, Dimmer, Divider, Form } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import { auth } from '../../lib/db'

@inject('store') @observer
export default class extends Component {
  register = (e) => {
    e.preventDefault()

    this.props.store.startLoading()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const promise = auth.createUserWithEmailAndPassword(username, password)

    promise
      .then(() => this.props.store.closeModal())
      .then(() => this.props.store.stopLoading())
  }

  render () {
    return (
      <div>
        <Dimmer active={this.props.store.modalOpen}
          onClickOutside={this.props.store.closeModal}
          page
          >
          <div className='register-form'>
            <h1>Sign Up Now <br />
            to Begin Serving Plates</h1>
            <p style={{marginTop: 20}}>Create endless tasks for free!</p>
            <Form method='post' onSubmit={this.register} loading={this.props.store.loading}>
              <Form.Field>
                <input type='text' name='username' id='username' placeholder='username' required />
              </Form.Field>

              <Form.Field>
                <input type='password' name='password' id='password' placeholder='password' required />
              </Form.Field>
              <Divider />
              <Button type='submit' primary>Register Now!</Button>
            </Form>
          </div>
        </Dimmer>
        <style jsx>{`
          .register-form {
            color: black;
            padding: 20px;
            padding-top: 40px;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            border-radius: 10px;
            background-color: #FAFAFA;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            width: 500px;
          }
          @media only screen and (max-width: 660px) {
            .register-form {
              width: 95%;
              padding-right: 10px;
              padding-left: 10px;
              padding-top: 20px;
              padding-bottom: 20px;
            }
        `}</style>
      </div>
    )
  }
}
