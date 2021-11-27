const express = require('express')
require('express-async-errors')
const Blog = require('../models/blog')
const User = require('../models/user')

const blogsRouter = express();

blogsRouter.get('/', async (request, response,next) => {
      //const blogs = await Blog.find({})
      const blogs = await Blog.find({}).populate('user',{username: 1,name: 1})
      if (blogs)
        response.status(200).json(blogs)
})

/*
blogsRouter.get('/:id', async (request, response, next) => {
  console.log("get id request")
  try{        
      const blog = await Blog.findById(request.params.id)        
      if (blog)
      response.status(200).json(blog)  
    } catch(exception) {
      next(exception)
    }    
})

*/
blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id).populate('user',{username: 1,name: 1, id: 1})
  if (blog)
    response.json(blog)
  else
    response.status(404).send({ message: 'Blog Not Found' }).end()
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  // const decodedToken = jwt.verify(request.token, process.env.SECRET)
  // if (!request.token || !decodedToken.id) 
  //   return response.status(401).json({ error: 'token missing or invalid' })

  //const user = await User.findById(decodedToken.id) // old
  // get user from request object
  const user = request.user
  
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes:  body.likes === undefined ? false : body.likes,
    user: user._id  
  })

  const blogSave = await blog.save()
  
  user.blogs = user.blogs.concat(blogSave._id)
  await user.save()
  response.json(blogSave)
})

blogsRouter.put('/:id', async (request, response, next) => {
  console.log("put id request body", request.body)
  await Blog.findByIdAndUpdate(request.params.id,request.body,{ new: true })
  response.status(204).end()
})

blogsRouter.delete('/:id', async (request, response, next) => {
  console.log("delete api")

  
  // const decodedToken = jwt.verify(request.token, process.env.SECRET)
  // if (!request.token || !decodedToken.id) 
  //   return response.status(401).json({ error: 'token missing or invalid' })

  // get user from request object
  const user = request.user

  //Blog that if you fetch a blog from the database,
  const userid = user
  const blog = await Blog.findById(request.params.id)  
  
  //The id(blog.user) fetched from the database must be parsed into a string first
  if(!blog)
    response.status(404).send({ message: 'Blog Not Found, this blog was deleted' }).end()
  else if ( blog.user.toString() === userid.toString())
    await Blog.findByIdAndRemove(request.params.id)
  else 
    return response.status(400).json({ error: 'Impossible to delete the blog besause because this blog is not created by '+decodedToken.username})
  response.status(204).end()
})

module.exports = blogsRouter