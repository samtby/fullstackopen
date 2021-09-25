//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to', url)


mongoose.connect(url)
.then(console.log('connected to MongoDB'))
.catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})
function setRunValidators() {
    this.setOptions({ runValidators: true });
  }

mongoose.plugin(schema => {
schema.pre('update', setRunValidators);
});


// Define your schema as normal.
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true,minlength: 3 },
number:{ type: String, required: true,minlength: 8 }
})


// Pre hook for `findOneAndUpdate`
personSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
  });


/*
const opts = { runValidators: true };
mongoose.updateOne({}, { number:{ type: String, required: true,minlength: 8 } }, opts, function(err) {
  assert.equal(err.errors.color.message,
    'Invalid number');
});

*/

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Persons', personSchema)