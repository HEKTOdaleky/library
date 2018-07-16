const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TakeBookJournalSchema = new Schema ({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  closeDate: {
    type: Date
  }
});

const TakeBookJournal = mongoose.model("TakeBookJournal", TakeBookJournalSchema);
module.exports = TakeBookJournal;