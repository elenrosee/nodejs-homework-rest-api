const validation = (schema) => {
  return (req, res, next) => {
    if (!Object.keys(req.body).length) {
      const error = new Error('missing fields')
      error.status = 400
      next(error)
      return
    }
    const { error } = schema.validate(req.body)
    if (error) {
      error.status = 400
      error.message = 'missing required name field'
      next(error)
      return
    }
    next()
  }
}

module.exports = validation
