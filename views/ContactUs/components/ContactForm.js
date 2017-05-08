import { compose, graphql } from 'react-apollo'

import { Card } from 'material-ui/Card'
import ContactUsMutation from '../../../mutations/ContactUsMutation'
import { Field } from 'redux-form'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Icon from '../../../components/Icon/Icon'
import PropTypes from 'prop-types'
import React from 'react'

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
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-lg-offset-3">
          <Card style={{ padding: 20 }}>
            <h2 style={{ color: '#223741', marginBottom: 40 }}>Contact Us</h2>
            <form onSubmit={e => sendEmail(e)} id="contactForm">
              <Field
                name="name"
                id="name"
                component={RenderRegularTextField}
                type="text"
                label="Name"
                style={{ marginBottom: 20 }}
              />
              <Field
                name="email"
                id="email"
                component={RenderRegularTextField}
                type="text"
                label="Email"
                style={{ marginBottom: 20 }}
              />
              <br />
              <Field
                name="message"
                id="message"
                component={RenderRegularTextField}
                type="text"
                label="Describe your message."
                style={{ marginBottom: 20 }}
              />
              <br />
              <FloatingActionButton
                type="submit"
                backgroundColor="#343F53"
                style={{ float: 'right' }}
              >
                <Icon type="fa fa-paper-plane" />
              </FloatingActionButton>
            </form>
          </Card>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 100px;
            margin-bottom: 50px;
          }
          h4 {
            color: white;
            font-weight: 100;
            margin-bottom: 20px;
          }
          .contact-right {
            padding: 30px;
            background-color: #103F6E;
          }
          @media only screen
            and (min-device-width : 320px)
            and (max-device-width : 1030px) {
              .contact-container {
                margin-left: 10px;
                margin-right: 10px;
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
  graphql(ContactUsMutation, {
    props: ({ mutate }) => ({
      contactUs: (email, name, message) =>
        mutate({ variables: { email, name, message } })
    })
  })
)(ContactForm)
