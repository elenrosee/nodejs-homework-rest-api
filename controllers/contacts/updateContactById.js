const { isValidObjectId } = require('mongoose')
const { Contact } = require('../../models')

const updateContactById = async (req, res) => {
  const { contactId } = req.params
  const result =
    isValidObjectId(contactId) &&
    (await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    }))
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
}

module.exports = updateContactById
