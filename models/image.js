const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  img: {
    path: String,
    contentType: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
