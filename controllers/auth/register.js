const { Conflict } = require('http-errors')
const { User } = require('../../models')

const register = async (req, res, next) => {
  const { password, email, subscription } = req.body

  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const result = await User.create({ password, email, subscription })

  console.log('result')
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: { email, subscription: result.subscription },
    },
  })
}

module.exports = register
