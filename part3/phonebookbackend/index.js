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
  },
  { 
    "id": 5,
    "name": "Hetkeloo Harper", 
    "number": "39-54-9854211"
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
     response.status(404).send("The person no exist")
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.findIndex(person => person.id === id)  
  if(person !== -1){
    const delPerson = persons.splice(person,1)
    if(delPerson.map(del => del.id === id))
      response.json(delPerson)
    else
      response.status(500).send('Internal Server Error')
  }else
    response.status(404).send('Not fund ')
})

app.post('/api/persons', (request, response) => {
  const personreq = request.body 
  console.log(personreq.name.length*personreq.number.length)
    if((personreq.name.length*personreq.number.length) !== 0){
      const find = persons.find(person => person.name === personreq.name)
      console.log(find)
      if(find == undefined){
        personreq.id=Math.floor(Math.random() * 14563)
      if(persons.length - persons.push(personreq) == -1)
        response.json(personreq)
      }else
        response.status(400).json({ error: 'name must be unique' })
    }else
    response.status(400).json({ error: 'The name or number is missing' })
})

app.get('/api/info', (request, response) => {
  responseTime =  request.responseTime

  let date_ob = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateFinal = date_ob.toLocaleString("en-US",options);

  let timeString =date_ob.toTimeString();
  response.send(
    '<p>Phonebook has info for '+ persons.length+' people</p>'+
    '<p>'+dateFinal+' '+timeString+'</p>'    
  )
})
  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
