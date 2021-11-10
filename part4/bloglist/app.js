
const express = require('express')
const http = require('http')
const app = express()
require('express-async-errors')
const cors = require('cors')
const blogsRouter = require('./controllers/blog')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

//const server = http.createServer(app)
console.log("app :", config)
//logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB :',MONGODB_URI)
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

  
app.use(cors())
//app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogsRouter)
//app.use('/api/blogs/:id', blogsRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

/*
app.listen(config.PORT, () => {

let server
server = app.listen(config.PORT, () => {

  logger.info(`Server running on port ${config.PORT}`)
})*/

module.exports = app