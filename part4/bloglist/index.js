const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

////////////////////////////////////////////////////////////////////

const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')

const Blog = mongoose.model('Blog', blogSchema)

app.use(unknownEndpoint)
// this has to be the last loaded middleware.
app.use(errorHandler)


const app = require('./app') // the actual Express application
const config = require('./utils/config')
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})