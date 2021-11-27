const logger = require('./logger')
const jwt = require('jsonwebtoken')

const requestLogger = (request, response, next) => {
  logger.info("requestLogger")
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

const getTokenFrom = request => {  const authorization = request.get('authorization')
if (authorization && authorization.toLowerCase().startsWith('bearer ')) 
  return authorization.substring(7) 
return null
}

const unknownEndpoint = (request, response) => {
  logger.info("unknownEndpoint")
    response.status(404).send({ error: 'unknown endpoint' })
}

const tokenExtractor = function (request, response, next) {
  // code that extracts the token
  logger.info("tokenExtractor")
  request.token =  getTokenFrom(request)
  next()
}

const userExtractor = function (request, response, next) {
  logger.info("userExtractor")
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) 
    return response.status(401).json({ error: 'token missing or invalid' })
    request.user = decodedToken.id
    request.username = decodedToken.username
  next()
}

const errorHandler = (error, request, response, next) => {
    logger.info("errorHandler")
    logger.info("log: ",error)
    logger.info("=================")
    logger.info(error.message,error.name)  
    error
    if (error.name ==='CastError')
      return response.status(400).send({ error: 'malformatted id' })
    if (error.name ==='ValidationError')
      return response.status(400).json({ error: error.message })
    if (error.name === 'JsonWebTokenError')
      return response.status(401).json({ error: 'invalid token' })
    if (error.name === 'TokenExpiredError')
      return response.status(401).json({ error: 'token expired' })
    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
    tokenExtractor,
    userExtractor    
}