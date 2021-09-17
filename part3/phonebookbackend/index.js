const express = require('express');
const cors = require('cors')
var morgan = require('morgan');
const app = express();
var bodyParser = require('body-parser');

morgan.token('id',(req)=> req.body.id);
morgan.token('body',(req)=> JSON.stringify(req.body));
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json());
app.use(morgan('tiny'));

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
  },
  {
    "name": "Julien",
    "number": "9999",
    "id": 6
  },
  {
    "name": "Nickita",
    "number": "77777777",
    "id": 7
  },
  {
    "name": "Nora",
    "number": "897654",
    "id": 8
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

app.get('/api/persons', (request, response) => {
  response.json(persons);
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);
    if(person)
      response.json(person);
    else 
     response.status(404).send("The person no exist");
})

//app.put('/api/persons/:id'),(request, response) => {}

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.findIndex(person => person.id === id);
  if(person !== -1){
    const delPerson = persons.splice(person,1);
    if(delPerson.map(del => del.id === id))
      response.json(delPerson);
    else
      response.status(500).send('Internal Server Error');
  }else
    response.status(404).send('Not fund');
})

app.post('/api/persons',morgan(':method :url :status :res[content-length] :response-time ms :body'), (request, response) => {
  const personreq = Object();
   Object.assign(personreq ,request.body);
    if((personreq.name.length*personreq.number.length) !== 0){
      const find = persons.find(person => person.name === personreq.name);
      if(find == undefined){
        personreq.id=Math.floor(Math.random() * 14563);
      if(persons.length - persons.push(personreq) == -1)
        response.json(personreq);
      }else
        response.status(400).json({ error: 'name must be unique' });
    }else
    response.status(400).json({ error: 'The name or number is missing' });
})

app.get('/api/info', (request, response) => {

  let date_ob = new Date();
  let dateFinal = date_ob.toLocaleString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  let timeString =date_ob.toTimeString();
  response.send(
    '<p>Phonebook has info for '+ persons.length+' people</p>'+
    '<p>'+dateFinal+' '+timeString+'</p>'    
  )
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
}


app.use(unknownEndpoint)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
