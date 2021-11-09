const mongoose = require('mongoose')

function setRunValidators() {
  this.setOptions({ runValidators: true });
}

mongoose.plugin(schema => {
schema.pre('update', setRunValidators);
});

// Define your schema as normal.
const blogSchema = new  mongoose.Schema({
  title: { type: String, unique: true,required: true},
  author: { type: String,unique: false,required: false},
  url: { type: String , required: true},
  likes:{ type: Number ,default: 0}
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }
})



module.exports = mongoose.model('Blog', blogSchema)