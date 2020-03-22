const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  passwordHash: String,
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  ]
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnObj) => {
    (returnObj.id = returnObj._id.toString()), delete returnObj._id;
    delete returnObj.__v;
    delete returnObj.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
