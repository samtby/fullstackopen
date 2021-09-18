const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

const Persons = mongoose.model('Persons', personSchema)
const password = process.argv[2]
const url =`mongodb+srv://fullstack:${password}@cluster0.n0gjv.mongodb.net/phonnebook_app?retryWrites=true&w=majority`

if(process.argv.length > 3){
const name = process.argv[3]
const number = process.argv[4]

mongoose.connect(url)
/*
const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

const Persons = mongoose.model('Persons', personSchema)
*/
const person = new Persons({
  id: Math.floor(Math.random() * 14563),
  name: name,
  number: number,
})

Persons.find({}).then(result => {
    result.forEach(Persons => {
      console.log(Persons)
    })
    mongoose.connection.close()
})

person.save().then(result => {
  //console.log('person saved!')  
    console.log("added "+result.name+" number "+result.number+" to phonebook");
  mongoose.connection.close()
})
}else{
    mongoose.connect(url)
    console.log("phonebook:")
    Persons.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name+" "+person.number);
        })
        mongoose.connection.close()
    })
}