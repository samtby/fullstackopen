const logger = require('./logger')
const jwt = require('jsonwebtoken')

const requestLogger = (request, response, next) => {
  console.error("requestLogger")
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
  console.error("unknownEndpoint")
    response.status(404).send({ error: 'unknown endpoint' })
}

const tokenExtractor = function (request, response, next) {
  // code that extracts the token
  console.error("tokenExtractor")
  request.token =  getTokenFrom(request)
  next()
}

const userExtractor = function (request, response, next) {
  console.error("userExtractor")
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) 
    return response.status(401).json({ error: 'token missing or invalid' })
    request.user = decodedToken.id
    request.username = decodedToken.username
  next()
}

const errorHandler = (error, request, response, next) => {
  console.log(error.message,error.name)  
  console.error("errorHandler")
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