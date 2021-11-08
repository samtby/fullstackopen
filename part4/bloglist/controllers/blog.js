const express = require('express')
require('express-async-errors')
const Blog = require('../models/blog')

const blogsRouter = express();

blogsRouter.get('/', async (request, response,next) => {
/*Blog.find({})
    .then(blogs => {
      response.status(200).json(blogs)
    })
    .catch(error => next(error))
*/
const blogs = await Blog.find({})
if (blogs) {
  response.status(200).json(blogs)
} else {
  response.status(404).end()
}
})
  /*
blogsRouter.post('/', (request, response,next) => {
const blog = new Blog(request.body)

blog
    .save()
    .then(result => {
    response.status(201).json(result)
    })
    .catch(error => next(error))
})
*/
blogsRouter.post('/', async (request, response, next) => {
  const blog = new Blog(request.body)
  try{
      
      const blogSave = await blog.save()
      console.log("blog.id: ", blogSave.id)
      if (blogSave) {
        response.status(201).json(blogSave)
      } else {
        response.status(404).end()
      }
    } catch(exception) {
      next(exception)
    }
})
 /*
  

blogsRouter.get('/:id', async (request, response, next) => {
    try{
        
        const blog = await Blog.findById(request.params.id)
        console.log("blog.id: ", blog.id)
        if (blog) {
          response.json(blog)
        } else {
          response.status(404).end()
        }
      } catch(exception) {
        next(exception)
      }
   /*
    blog.findById(request.params.id)
   .then(result => {
    if (result.body)
        response.json(result)
    else
        response.status(404).end()
    
})
})*/

blogsRouter.delete('/:id', async (request, response, next) => {
    try {
      await Blog.findByIdAndRemove(request.params.id)
      response.status(204).end()
    } catch (exception) {
      next(exception)
    }
  })

module.exports = blogsRouter