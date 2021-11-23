const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')


/** on postman */

/*
  {
      "notes": [],
      "username": "root",
      "name": "Superuser",
      "password": "salainen"
  }
*/
usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs',{title: 1,author: 1})
  response.json(users)
})


usersRouter.get('/:id', async (request, response) => {
  const users = await User.findById(request.params.id)
  if (users)
    response.json(users)
  else
    response.status(404).end()
})

usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = usersRouter