const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookChangeSchema = new Schema({
  oldBookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  newBookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  readerId: {
    type: Schema.Types.ObjectId,
    ref: 'Reader',
    required: true
  },
  dateOfReplacement: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const BookChange = mongoose.model('BookChange', BookChangeSchema);
module.exports = BookChange;