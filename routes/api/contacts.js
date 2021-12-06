const express = require('express')

const { validation, controllerWrapper } = require('../../middlewares')
const { contactSchema } = require('../../schemas')
const { contacts: controllers } = require('../../controllers')

const validateMiddleware = validation(contactSchema)

const router = express.Router()

router.get('/', controllerWrapper(controllers.listContacts))

router.get('/:contactId', controllerWrapper(controllers.getContactById))

router.post('/', validateMiddleware, controllerWrapper(controllers.addContact))

router.put(
  '/:contactId',
  validateMiddleware,
  controllerWrapper(controllers.updateContactById)
)

router.delete('/:contactId', controllerWrapper(controllers.removeContactById))

module.exports = router
