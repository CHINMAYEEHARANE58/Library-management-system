const mongoose = require('mongoose');

const issuanceSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  issuedDate: { type: Date, default: Date.now },
  targetReturnDate: { type: Date, required: true },
  returnedDate: Date  
});

module.exports = mongoose.model('Issuance', issuanceSchema);
