const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
// https://www.npmjs.com/package/mongoose-unique-validator
const userSchema = new mongoose.Schema({
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ], 
  username: {
      type: String,
      minLength: 3,
      unique: true,
      required: true
    },
    name: String,
    passwordHash: {
      type: String ,
      required: true
    }
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

  userSchema.path('passwordHash').validate(function(v) {
    return v.length > 3;
  });

  userSchema.plugin(uniqueValidator)
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User