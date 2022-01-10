const express = require('express')

const { controllerWrapper, auth, upload } = require('../../middlewares')
const { users: controllers } = require('../../controllers')

const router = express.Router()

router.get('/current', auth, controllerWrapper(controllers.getCurrent))

router.patch(
  '/avatars',
  auth,
  upload.single('avatar'),
  controllerWrapper(controllers.updateAvatar)
)

router.get(
  '/verify/:verificationToken',
  controllerWrapper(controllers.verifyEmail)
)

router.post('/verify', controllerWrapper(controllers.reVerifyEmail))

module.exports = router
