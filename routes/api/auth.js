const express = require('express')

const { controllerWrapper, validation, auth } = require('../../middlewares')
const { auth: controllers } = require('../../controllers')
const { joiSchema } = require('../../models/user')

const router = express.Router()

router.post(
  '/signup',
  validation(joiSchema),
  controllerWrapper(controllers.signup)
)

router.post(
  '/login',
  validation(joiSchema),
  controllerWrapper(controllers.login)
)

router.get('/logout', auth, controllerWrapper(controllers.logout))

module.exports = router
