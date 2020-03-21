const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  img: {
    type: String
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
