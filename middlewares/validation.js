/* eslint-disable no-var */

const Joi = require('joi')

const validation = (schema) => {
  return (req, res, next) => {
    switch (req.method) {
      case 'POST':
        var errMessage = 'missing required name field'
        break

      case 'PUT':
        // eslint-disable-next-line no-redeclare
        var errMessage = 'missing fields'
        break

      case 'PATCH':
        // eslint-disable-next-line no-redeclare
        var errMessage = 'missing field favorite'
        break

      default:
        // eslint-disable-next-line no-redeclare
        var errMessage = 'missing fields'
    }

    const NewError = new Error(`${errMessage}`)
    NewError.status = 400

    Joi.assert(req.body, schema, NewError)

    next()
  }
}

module.exports = validation
