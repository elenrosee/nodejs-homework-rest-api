const express = require('express')
const Joi = require('joi')

const contactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

const router = express.Router()

const contactsOperations = require('../../model/contactsOperations')

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts()
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.getContactById(contactId)
    if (!result) {
      const error = new Error(`Contact with id=${contactId} not found`)
      error.status = 404
      throw error
    }
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body)
    if (error) {
      const error = new Error('missing required name field')
      error.status = 400
      throw error
    }
    const result = await contactsOperations.addContact(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body)
    if (error) {
      const error = new Error('missing fields')
      error.status = 400
      throw error
    }
    const { contactId } = req.params
    const result = await contactsOperations.updateContactById(
      contactId,
      req.body
    )
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
