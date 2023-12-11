const createError = require('http-errors')

module.exports.validateBody = (req, res, next) => {
    if (!req.body.name) {
        next(createError(400, 'Bad Request: Name required'))
    }

    next()
}