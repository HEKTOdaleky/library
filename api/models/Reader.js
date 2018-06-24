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
  documentNumber: {
    type: String,
    required: true
  },
  documentDate: {
    type: Date,
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Reader = mongoose.model('Reader', ReaderSchema);

module.exports = Reader;