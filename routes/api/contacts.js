const express = require('express')

const { controllerWrapper, validation } = require('../../middlewares')

const { contacts: controllers } = require('../../controllers')
const { joiSchema, favoriteJoiSchema } = require('../../models')

const router = express.Router()

router.get('/', controllerWrapper(controllers.listContacts))

router.get('/:contactId', controllerWrapper(controllers.getContactById))

router.post(
  '/',
  validation(joiSchema),
  controllerWrapper(controllers.addContact)
)

router.put(
  '/:contactId',
  validation(joiSchema),
  controllerWrapper(controllers.updateContactById)
)

router.patch(
  '/:contactId/favorite',
  validation(favoriteJoiSchema),
  controllerWrapper(controllers.updateStatusContact)
)

router.delete('/:contactId', controllerWrapper(controllers.removeContactById))

module.exports = router
