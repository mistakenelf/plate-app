import ContactUsMutation from '../../mutations/contactUs'
import Modal from '../Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import { graphql } from 'react-apollo'

function sendEmail(e, contactUs) {
  e.preventDefault()

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value

  contactUs(email, name, message)
  Router.push('/')
}

function ContactUsModal({ contactUs, contactModalOpen, closeContactModal }) {
  return (
    <Modal open={contactModalOpen} closeModal={closeContactModal}>
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
            <label className="input-label" htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="email" required />
          </div>
          <div className="input-group fluid">
            <label className="input-label" htmlFor="message">Message:</label>
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
        <style jsx>{`
        .input-label {
          width: 70px;
        }
      `}</style>
      </form>
    </Modal>
  )
}

ContactUsModal.propTypes = {
  contactUs: PropTypes.func,
  contactModalOpen: PropTypes.bool,
  closeContactModal: PropTypes.func
}

export default graphql(ContactUsMutation, {
  props: ({ mutate }) => ({
    contactUs: (email, name, message) =>
      mutate({ variables: { email, name, message } })
  })
})(ContactUsModal)
