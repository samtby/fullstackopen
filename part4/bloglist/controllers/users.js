const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs',{url: 1,title: 1,author: 1})
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
  let passwordHash 
  if(body.password.length > 2)
    passwordHash = await bcrypt.hash(body.password, saltRounds)
  else
    response.status(400).send({ error: 'User validation failed: password: Path `password` (`'+body.password+'`) is shorter than the minimum allowed length ('+(body.password.length+1)+').'})

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = usersRouter