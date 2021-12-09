const { Contact } = require('../../models')

const listContacts = async (req, res) => {
  const result = await Contact.find({})

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = listContacts
