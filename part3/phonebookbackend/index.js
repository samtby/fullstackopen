const express = require('express')
const app = express()
var bodyParser = require('body-parser');
let responseTime = require('response-time')
app.use(bodyParser.json());
app.use(responseTime())

app.use(responseTime((req, res, time) => {
  console.log(req.method, req.url, time + 'ms');
}));
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person)
      response.json(person)
    else 
     response.status(404).send("The note no exist")
})


app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person  = persons.filter(person => person.id !== id)

  response.status(204).end()
})


app.post('/api/persons', (request, response) => {

    const persons = request.body  
    console.log(persons)  
    response.json(persons)
   
  })

app.get('/api/info', (request, response) => {
  responseTime =  request.responseTime

  let date_ob = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateFinal = date_ob.toLocaleString("en-US",options);

  let timeString =date_ob.toTimeString();
  // current date
  response.send(
    '<p>Phonebook has info for '+ persons.length+' people</p>'+
    '<p>'+dateFinal+' '+timeString+'</p>'    
  )
})
  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
