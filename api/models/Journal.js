const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Reader",
    required: true
  },
  openDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  closeDate: {
    type: Date
  },
  estimatedDate: {
    type: String
  }
});

const Journal = mongoose.model("Journal", JournalSchema);
module.exports = Journal;
