import { Card } from 'material-ui/Card'
import ContactUsMutation from '../../../mutations/ContactUsMutation'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import React from 'react'
import TextField from 'material-ui/TextField'
import { graphql } from 'react-apollo'

const ContactForm = ({ contactUs }) => {
  const sendEmail = e => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    contactUs(email, name, message)

    document.getElementById('contactForm').reset()
  }

  return (
    <div className="container">
      <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1>Get in touch with us</h1>
          <div className="contact-form">
            <Card style={{ paddingTop: 40, paddingBottom: 40 }}>
              <form onSubmit={e => sendEmail(e)} id="contactForm">
                <TextField hintText="Name" id="name" /><br />
                <TextField
                  hintText="Email Address"
                  id="email"
                  style={{ marginTop: 20 }}
                />
                <br />
                <TextField
                  hintText="Describe your message."
                  id="message"
                  multiLine
                  rows={3}
                />
                <br />
                <RaisedButton
                  label="Send Message"
                  primary
                  type="submit"
                  style={{ width: 250, marginTop: 50 }}
                />
              </form>
            </Card>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 100px;
            margin-bottom: 100px;
          }
          h1 {
            font-weight: 900;
            font-size: 45px;
          }
          .contact-form {
            margin-left: auto;
            margin-right: auto;
            margin-top: 60px;
          }
          @media only screen
            and (min-device-width : 320px)
            and (max-device-width : 1030px) {
              .contact-form {
                width: 90%;
              }
            }
        `}
      </style>
    </div>
  )
}

ContactForm.propTypes = {
  contactUs: PropTypes.func
}

export default graphql(ContactUsMutation, {
  props: ({ mutate }) => ({
    contactUs: (email, name, message) =>
      mutate({ variables: { email, name, message } })
  })
})(ContactForm)
