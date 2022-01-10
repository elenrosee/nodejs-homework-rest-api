const { hashSync, genSaltSync } = require('bcrypt')
const { Conflict } = require('http-errors')
const { User } = require('../../models')

const signup = async (req, res, next) => {
  const { password, email, subscription } = req.body

  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const hashPassword = hashSync(password, genSaltSync(10))
  const result = await User.create({
    password: hashPassword,
    email,
    subscription,
  })

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: { email, subscription: result.subscription },
    },
  })
}

module.exports = signup
