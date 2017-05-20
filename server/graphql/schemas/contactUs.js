const nodemailer = require('nodemailer')
const env = require('../../../env-config.js')

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
      let mailOptions = {
        from: email + ' ' + '(' + name + ')',
        to: env.EMAIL_USER,
        subject: 'Feedback',
        text: message
      }

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
