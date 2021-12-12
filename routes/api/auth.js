const express = require('express')

const { controllerWrapper, validation } = require('../../middlewares')
const { auth: controllers } = require('../../controllers')
const { joiSchema } = require('../../models/user')

const router = express.Router()

router.post(
  '/register',
  validation(joiSchema),
  controllerWrapper(controllers.register)
)
// router.post('./signup')

module.exports = router
