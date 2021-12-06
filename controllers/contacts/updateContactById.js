const Joi = require('joi')

const contactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

const contactsOperations = require('../../model/contactsOperations')

const updateContactById = async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body)
    if (error) {
      const error = new Error('missing fields')
      error.status = 400
      throw error
    }
    const { contactId } = req.params
    const result = await contactsOperations.updateContactById(
      contactId,
      req.body
    )
    if (!result) {
      const error = new Error(`Contact with id=${contactId} not found`)
      error.status = 404
      throw error
    }
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContactById
