const logger = require('./logger')

const { NODE_ENV } = require('./config')

function errorHandler(error, req, res, next)
 {console.error(error); res.status(500).json({error: {message: 'Server error'}})}

module.exports = errorHandler