const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Counter = require('./Counter');

const ReaderSchema = new Schema({
  inventoryCode: {
    type: String
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
    validate: {
      validator: async function (value) {
        const r = await Reader.findOne({documentNumber: value});
        if (r) throw new Error(error);
        return true;
      },
      message: "Читатель с таким документом уже зарегистрирован"
    }
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

ReaderSchema.pre('save', async function (next) {
  if (!this.isNew || this.inventoryCode) return next();

  const counter = await Counter.findOne();
  counter.readerCode = counter.readerCode + 1;
  await counter.save();

  const code = counter.readerCode.toString();
  this.inventoryCode = ('000000' + code).slice(code.length);

  next();
});

const Reader = mongoose.model('Reader', ReaderSchema);

module.exports = Reader;