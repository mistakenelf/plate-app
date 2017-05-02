const nodemailer = require('nodemailer')
const env = require('../../../env-config.js')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS
  }
})

const contactUsTypeDef = `
  type Contact {
    email: String
    name: String
    message: String
  }

  extend type Mutation {
    contactUs(email: String, name: String, message: String): Contact
  }
`

const contactUsResolvers = {
  Mutation: {
    contactUs: ({}, { email, name, message }) => {
      // setup email data with unicode symbols
      let mailOptions = {
        from: email + ' ' + '(' + name + ')', // sender address
        to: env.EMAIL_USER, // list of receivers
        subject: 'Feedback', // Subject line
        text: message // plain text body
      }

      // send mail with defined transport object
      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error)
        }
        console.log('Message %s sent: %s', info.messageId, info.response)
      })
    }
  }
}

module.exports = {
  contactUsTypeDef,
  contactUsResolvers
}
