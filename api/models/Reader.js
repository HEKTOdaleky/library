const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReaderSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  }
});

const Reader = mongoose.model('Reader', ReaderSchema);

module.exports = Reader;