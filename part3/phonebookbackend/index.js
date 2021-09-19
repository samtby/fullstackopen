require('dotenv').config()
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

const Persons = require('./models/person.js')

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

app.get('/api/persons', (request, response) => {
  Persons.find({}).then(person => {
    response.json(person)
  })
})




app.get('/api/persons/:id', (request, response) => {    

  //lenth 24
  console.log(request.params.id.length)

/*
  var mongoose = require('mongoose');
  var myId = new mongoose.Types.ObjectId(request.params.id)
  //var mongoose = require('mongoose');
  //let id = new mongoose.mongo.ObjectId(request.params.id);
  
  Persons.find({_id:request.params.id}, function (err, user) {   console.log('error :', err.message) } );
  */

  //Good id
  //53cb6b9b4f4ddef1ad47f94f
/*
  const mongoose = require('mongoose');
const id = mongoose.Types.ObjectId (request.params.id)
*/


Persons.findById(request.params.id)    
    .then(
      person =>{console.log(person)
      if(person === null)
        response.status(404).send("The person no exist")
      else
        response.json(person)
    })
    .catch(error => {
      console.log(error)  
      response.status(400).send({ error: 'malformatted id' })
      //error.status(500).json({error: true, data: {message: "err.message"}});
      //console.log('error :', error.message)
      //response.status(500).json({error: true, data: {message: "err.message"}});
      //app.use(unknownEndpoint)
    })
    
})
/*
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
*/
app.post('/api/persons',morgan(':method :url :status :res[content-length] :response-time ms :body'), (request, response) => {
  const personreq = Object();
   Object.assign(personreq ,request.body);
    if((personreq.name.length*personreq.number.length) !== 0){
      Persons.find({name:personreq.name}).then(person => {
        if(person.length === 0){
          const pers = new Persons({name: personreq.name, number: personreq.number })
          pers.save().then(result => {
            console.log("added "+result.name+" number "+result.number+" to phonebook");
            response.json(result)
          })
        }else
          response.status(400).json({ error: 'name must be unique' });
      })          
    }else
      response.status(400).json({ error: 'The name or number is missing' });
})
/*
app.get('/api/info', (request, response) => {

  let date_ob = new Date();
  let dateFinal = date_ob.toLocaleString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  let timeString =date_ob.toTimeString();
  response.send(
    '<p>Phonebook has info for '+ persons.length+' people</p>'+
    '<p>'+dateFinal+' '+timeString+'</p>'    
  )
})
*/
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
}


app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
