const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
.then(result => { 
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

// Define your schema as normal.
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: String
})

// Apply the uniqueValidator plugin to userSchema.
personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        console.log("toJSON document"+document)
        console.log("toJSON returnedObject"+returnedObject)
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Persons', personSchema)