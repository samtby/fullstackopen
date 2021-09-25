
require('dotenv').config()
const express = require('express');
const cors = require('cors')
var morgan = require('morgan');
const app = express();

morgan.token('id',(req) => req.body.id);
morgan.token('body',(req) => JSON.stringify(req.body))
app.use(express.static('build'))
app.use(cors())
app.use(express.json());
const Persons = require('./models/person.js')

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name ==='CastError')
    return response.status(400).send({ error: 'malformatted id' })
  if (error.name ==='ValidationError')
    return response.status(400).json({ error: error.message })
  next(error)
}

app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

app.get('/api/persons', (request, response,next) => {

  Persons.find({})
  .then(person => {
    response.json(person)
  })
  .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
Persons.findById(request.params.id)
    .then(
      person => {
      if(person === null)
        response.status(404).send("The person no exist")
      else
        response.json(person)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {

  /*const body = request.body
  if (body.content === undefined)
    return response.status(400).json({ error: 'content missing' })*/
  const personreq = Object();
   Object.assign(personreq ,request.body);
    if((personreq.name.length*personreq.number.length) !== 0){
      Persons.find({ name:personreq.name })
      .then(person => {
        //if(person.length === 0){
          person = new Persons({ name: personreq.name, number: personreq.number })
          person.save()
          .then(result => {
            console.log("added "+result.name+" number "+result.number+" to phonebook")
            response.json(result)
          })
          .catch(error => next(error))
      })
      .catch(error => next(error))
    }else
      response.status(400).json({ error: 'The name or number is missing' })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Persons.findByIdAndRemove(request.params.id)
  .then(
    person => {console.log(person)
    if(person === null)
      response.status(404).send("The person no exist")
    else
      response.json(person)
  })
  .catch(error => next(error))
})


app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Persons.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


app.get('/api/info', (request, response, next) => {
  Persons.find({})
  .then(persons => {
    persons.length
    let date_ob = new Date();
    let dateFinal = date_ob.toLocaleString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    let timeString =date_ob.toTimeString()
    response.send(
      '<p>Phonebook has info for '+ persons.length+' people</p>'+
      '<p>'+dateFinal+' '+timeString+'</p>'
    )
  })
  .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)
// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})