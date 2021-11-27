const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blog')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
//4.20*: bloglist expansion, step8
app.use(middleware.tokenExtractor)
// app.get('*', (req, res) => {
//     req.yourProperty = 'yourPropertytest'
// })

// app.use((req, res, next) => {
//    // console.log("req.token",req.token)
//     next()
// })
// https://stackoverflow.com/questions/37118070/adding-property-to-the-request-using-node-and-express

// use the middleware in all routes
//app.use()
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
//app.use(middleware.tokenExtractor)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app