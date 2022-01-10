const express = require('express')

const { controllerWrapper, auth } = require('../../middlewares')
const { users: controllers } = require('../../controllers')

const router = express.Router()

router.get('/current', auth, controllerWrapper(controllers.getCurrent))

module.exports = router
