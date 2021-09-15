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

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if(note)
      response.json(note)
    else 
     response.status(404).send("The note no exist")
})


app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})


app.post('/api/persons', (request, response) => {

    const persons = request.body  
    console.log(persons)  
    response.json(persons)
   
  })


  app.get('/api/info', (request, response) => {
    responseTime =  request.responseTime
    response.send(
      '<p>Phonebook has info for '+ persons.length+' people</p>'+
      '<p>Phonebook has info for '+ persons.length+' people</p>'    
    )
    let date_ob = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateFinal = date_ob.toLocaleString("en-US",options);

    let timeString =date_ob.toTimeString();
    // current date
    // GTM
    let gtm = date_ob.toGMTString();

    let day = date_ob.getDay();
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();
    
    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date);
    
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    
    // prints time in HH:MM format
    console.log(hours + ":" + minutes);
    
    console.log(day+"_"+year + "-" + month + "-" + date);
    
    console.log(dateFinal+" "+ month + " "+day+" "+year+timeString);
  })
  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
