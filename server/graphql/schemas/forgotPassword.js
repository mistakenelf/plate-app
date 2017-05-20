const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
var Chance = require('chance')

const env = require('../../../env-config.js')

const chance = new Chance()

const newPassword = chance.string()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS
  }
})

const forgotPasswordTypeDef = `
  extend type Mutation {
    forgotPassword(email: String): String
  }
`

const forgotPasswordResolvers = {
  Mutation: {
    forgotPassword: ({ db }, { email }) => {
      let mailOptions = {
        from: 'noreply@platemate.io',
        to: email,
        subject: 'Reset Password',
        text: `Your password has been reset to ${newPassword} Please login with this password and visit your account to change it` // plain text body
      }

      return transporter.sendMail(mailOptions, async error => {
        if (error) {
          return console.log(error)
        }

        const saltRounds = 10
        const hash = bcrypt.hashSync(newPassword, saltRounds)
        return await db
          .collection('users')
          .findOneAndUpdate({ email: email }, { $set: { password: hash } })
      })
    }
  }
}

module.exports = {
  forgotPasswordTypeDef,
  forgotPasswordResolvers
}
