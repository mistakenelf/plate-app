import ContactForm from './components/ContactForm'
import Footer from '../../components/Footer/Footer'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-margin">
          <div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .row-margin {
          margin-top: 50px;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  )
}

export default ContactUs
