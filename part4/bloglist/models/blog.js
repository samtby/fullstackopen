const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl)
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
const blogSchema = new mongoose.Schema({
  title: { type: String, unique: true},required: false,
  author: { type: String,unique: false,required: false},
  url: { type: String },
  likes:{ type: Number }
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }
})