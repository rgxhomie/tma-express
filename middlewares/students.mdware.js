const createError = require('http-errors')

module.exports.validateBody = (req, res, next) => {
    if (req.body.isError) {
        next(createError(400, 'Bad Request: Name required'))
    }

    next()
}