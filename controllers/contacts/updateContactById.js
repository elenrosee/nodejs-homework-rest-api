const contactsOperations = require('../../model/contactsOperations')

const updateContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContactById(contactId, req.body)
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
