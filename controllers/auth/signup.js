const { hashSync, genSaltSync } = require('bcrypt')
const gravatar = require('gravatar')
const { Conflict } = require('http-errors')
const { nanoid } = require('nanoid')
const sendEmail = require('../../helpers/sendEmail')
const { User } = require('../../models')

const signup = async (req, res, next) => {
  const { password, email, subscription } = req.body

  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const avatarURL = gravatar.url(email)
  const verificationToken = nanoid()
  const hashPassword = hashSync(password, genSaltSync(10))

  const result = await User.create({
    password: hashPassword,
    email,
    subscription,
    avatarURL,
    verificationToken,
  })

  const mail = {
    to: email,
    subject: 'Email confirmation',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  }

  await sendEmail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription: result.subscription,
        avatarURL,
      },
    },
  })
}

module.exports = signup
