const express = require('express')

const { controllerWrapper } = require('../../middlewares')

const { contacts: controllers } = require('../../controllers')

const router = express.Router()

router.get('/', controllerWrapper(controllers.listContacts))

// router.get('/:contactId', controllerWrapper(controllers.getContactById))

router.post('/', controllerWrapper(controllers.addContact))

//  router.put(
//   '/:contactId',
//   validateMiddleware,
//   controllerWrapper(controllers.updateContactById)
// )

// router.delete('/:contactId', controllerWrapper(controllers.removeContactById))

module.exports = router
