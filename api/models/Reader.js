const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReaderSchema = new Schema({
  inventoryNumber: {
    type: String,
    },
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
    required: true,
    unique: true
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
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true
  }
});

const Reader = mongoose.model('Reader', ReaderSchema);

module.exports = Reader;