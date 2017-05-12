import ContactUsMutation from '../../../mutations/ContactUsMutation'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import { graphql } from 'react-apollo'

const sendEmail = (e, contactUs) => {
  e.preventDefault()

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  contactUs(email, name, message)
  Router.push('/')
}

const ContactForm = ({ contactUs }) => {
  return (
    <div className="row row-margin">
      <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
        <form onSubmit={e => sendEmail(e, contactUs)}>
          <fieldset>
            <legend>Contact Us</legend>
            <div className="input-group fluid">
              <label className="input-label" htmlFor="name">
                Name:
              </label>
              <input type="text" id="name" placeholder="name" required />
            </div>
            <div className="input-group fluid">
              <label className="input-label" htmlFor="pwd">Email:</label>
              <input type="email" id="email" placeholder="email" required />
            </div>
            <div className="input-group fluid">
              <label className="input-label" htmlFor="pwd">Message:</label>
              <textarea
                rows={4}
                style={{ width: '100%' }}
                id="message"
                placeholder="message"
                required
              />
            </div>
            <div className="input-group fluid">
              <button type="submit" className="primary">Send</button>
            </div>
          </fieldset>
        </form>
      </div>
      <style jsx>{`
        .input-label {
          width: 80px;
        }
        .row-margin {
          margin-top: 50px;
          margin-bottom: 50px;
        }
      `}</style>
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
