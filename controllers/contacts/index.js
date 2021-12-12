const addContact = require('./addContact')
const getContactById = require('./getContactById')
const listContacts = require('./listContacts')
const removeContactById = require('./removeContactById')
const updateContactById = require('./updateContactById')
const updateStatusContact = require('./updateStatusContact')

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
  updateStatusContact,
}
