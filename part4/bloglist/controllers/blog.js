const notesRouter = require('express').Router()
const Blog = require('../models/blog')


notesRouter.get('/api/blogs', (request, response,next) => {
Blog
    .find({})
    .then(blogs => {
    response.json(blogs)
    })
    .catch(error => next(error))
})
  
notesRouter.post('/api/blogs', (request, response,next) => {
const blog = new Blog(request.body)

blog
    .save()
    .then(result => {
    response.status(201).json(result)
    })
    .catch(error => next(error))
})


module.exports = notesRouter