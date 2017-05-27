import ContactForm from './components/ContactForm'
import Modal from '../../components/Modal/Modal'
import PropTypes from 'prop-types'
import React from 'react'

const ContactUs = ({ contactModalOpen, closeContactModal }) => {
  return (
    <Modal open={contactModalOpen} closeModal={closeContactModal}>
      <ContactForm />
    </Modal>
  )
}

ContactUs.propTypes = {
  contactModalOpen: PropTypes.bool,
  closeContactModal: PropTypes.func
}

export default ContactUs
