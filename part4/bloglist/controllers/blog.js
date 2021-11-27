const express = require('express')
require('express-async-errors')
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

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
    response.status(404).end()
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  console.log("decodedToken: ",decodedToken)
  if (!request.token || !decodedToken.id) 
    return response.status(401).json({ error: 'token missing or invalid' })

  //const user = await User.findById(body.userId)
  const user = await User.findById(decodedToken.id)
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
  // console.log("blog.id: ", blogSave.id)
  //   if (blogSave) 
  // response.status(201).json(blogSave)
  response.json(blogSave)
})

blogsRouter.put('/:id', async (request, response, next) => {
  console.log("put id request body", request.body)
  await Blog.findByIdAndUpdate(request.params.id,request.body,{ new: true })
  response.status(204).end()
})

blogsRouter.delete('/:id', async (request, response, next) => {
  console.log("delete api")

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) 
    return response.status(401).json({ error: 'token missing or invalid' })
  
  const userid = decodedToken.id
  const blog = await Blog.findById(request.params.id)  
  
  console.log("userid.toString(): ",userid.toString())
  console.log("blog.user.toString()",blog.user.toString())
  if ( blog.user.toString() === userid.toString())
    await Blog.findByIdAndRemove(request.params.id)
  else 
    return response.status(400).json({ error: 'This blog is not created by '+decodedToken.username})
  response.status(204).end()
})

module.exports = blogsRouter