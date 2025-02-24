const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  publisher: String,
});

module.exports = mongoose.model('Book', bookSchema);
