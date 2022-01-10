const { BadRequest, NotFound } = require('http-errors')
const { User } = require('../../models')
const sendEmail = require('../../helpers/sendEmail')

const reVerifyEmail = async (req, res) => {
  const { email } = req.body

  if (!email) {
    throw BadRequest('Missing required field email')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw NotFound(`User with email: ${email} - not found.`)
  } else if (user.verify) {
    throw BadRequest('Verification has already been passed')
  }

  const mail = {
    to: email,
    subject: 'Email confirmation',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  }
  await sendEmail(mail)

  res.json({
    message: 'Verification email sent',
  })
}

module.exports = reVerifyEmail
