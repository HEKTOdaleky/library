const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JournalSchema = new Schema({
  bookID: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
},
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'Reader',
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  }
});

const Journal = mongoose.model('Journal', JournalSchema);

module.exports = Journal;