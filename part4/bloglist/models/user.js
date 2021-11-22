const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
// https://www.npmjs.com/package/mongoose-unique-validator
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true 
    },
    name: String,
    passwordHash: String,
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
      }
    ]
  })


  /*
  
          index: true,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
  */
  userSchema.index({})
  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })

  userSchema.plugin(uniqueValidator)
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User