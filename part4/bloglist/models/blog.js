const mongoose = require('mongoose')
//const config = require('../utils/config')

function setRunValidators() {
  this.setOptions({ runValidators: true });
}

mongoose.plugin(schema => {
schema.pre('update', setRunValidators);
});

// Define your schema as normal.
const blogSchema = new  mongoose.Schema({
  url: { type: String , required: true},
  title: { type: String, unique: true,required: true},
  author: { type: String,unique: false,required: false},  
  user: {    
    type: mongoose.Schema.Types.ObjectId,
    unique: false,
    ref: 'User'  
  },
  likes:{ type: Number ,default: 0}
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }
})

//--useFindAndModify: false,
// const mongoUrl = config.MONGODB_URI

//  mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })


module.exports = mongoose.model('Blog', blogSchema)