import { Field, reduxForm } from 'redux-form'
import { compose, graphql } from 'react-apollo'

import ContactUsMutation from '../../../mutations/ContactUsMutation'
import ContactValidation from '../../../validations/ContactValidation'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import React from 'react'
import RenderRegularTextField from '../../../utils/RenderRegularTextField'

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
      <div className="row contact-container">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="contact-left">
            <form onSubmit={e => sendEmail(e)} id="contactForm">
              <Field
                name="name"
                id="name"
                component={RenderRegularTextField}
                type="text"
                label="Name"
              />
              <Field
                name="email"
                id="email"
                component={RenderRegularTextField}
                type="text"
                label="Email"
              />
              <br />
              <Field
                name="message"
                id="message"
                component={RenderRegularTextField}
                type="text"
                label="Describe your message."
              />
              <br />
              <RaisedButton
                label="Send Message"
                primary
                type="submit"
                style={{ width: 250, marginTop: 50 }}
              />
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 100px;
            margin-bottom: 100px;
          }
          h4 {
            color: white;
            font-weight: 100;
            margin-bottom: 20px;
          }
          .contact-container {
            margin-right: 200px;
            margin-left: 200px;
          }
          .contact-left {
            background-color: white;
          }
          .contact-right {
            padding: 30px;
            background-color: #103F6E;
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

export default compose(
  reduxForm({
    form: 'contactForm',
    validate: ContactValidation
  }),
  graphql(ContactUsMutation, {
    props: ({ mutate }) => ({
      contactUs: (email, name, message) =>
        mutate({ variables: { email, name, message } })
    })
  })
)(ContactForm)
