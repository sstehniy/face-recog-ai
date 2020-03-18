const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        minlength: 6
    },
    passwordHash: String,
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnObj) => {
        returnObj.id = returnObj._id.toString(),
        delete returnObj._id;
        delete returnObj.__v;
        delete returnObj.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User

