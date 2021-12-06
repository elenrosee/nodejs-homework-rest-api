const contactsOperations = require('../../model/contactsOperations')

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts()
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = listContacts
