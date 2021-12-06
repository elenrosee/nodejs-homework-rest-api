const express = require('express')
const { contacts: controllers } = require('../../controllers')

const router = express.Router()

router.get('/', controllers.listContacts)

router.get('/:contactId', controllers.getContactById)

router.post('/', controllers.addContact)

router.put('/:contactId', controllers.updateContactById)

router.delete('/:contactId', controllers.removeContactById)

module.exports = router
